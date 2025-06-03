from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
# import openai
from google import genai

# Load environment variables
load_dotenv()
WEATHER_API_KEY = os.getenv("WEATHER_KEY")
# OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
# openai.api_key = OPENAI_API_KEY
client = genai.Client(api_key = os.getenv("GEMINI_API_KEY"))

def load_airport_coords(file_path="Airports.txt"):
    airport_coords = {}
    with open(file_path, "r") as f:
        for line in f:
            parts = line.strip().split(":")
            if len(parts) >= 15:
                icao, _, full_name, _, country, *_ , lat_str, lon_str = parts
                try:
                    lat = float(lat_str)
                    lon = float(lon_str)
                except ValueError:
                    continue  # skip invalid lines
                if full_name:
                    airport_coords[full_name.upper()] = {
                        "lat": lat,
                        "lon": lon,
                        "icao": icao,
                        "country": country
                    }
    return airport_coords

# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Load once at app startup
airport_coords_map = load_airport_coords()


def fetch_weather(airport_name):
    airport = airport_coords_map.get(airport_name.upper())
    if not airport:
        raise ValueError(f"Location not found for: {airport_name}")

    lat = airport["lat"]
    lon = airport["lon"]

    weather_url = f"https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}"
    weather_res = requests.get(weather_url).json()

    current = weather_res.get("current", {})
    weather_info = current.get("weather", [{}])[0]

    return {
        "resolved_name": airport_name,
        "country": airport["country"],
        "lat": lat,
        "lon": lon,
        "weather": {
            "description": weather_info.get("description", "N/A"),
            "temperature": current.get("temp", "N/A"),
            "humidity": current.get("humidity", "N/A"),
            "wind_speed": current.get("wind_speed", "N/A")
        },
        "alert": weather_res.get("alerts", [{}])[0].get("event", "No active alert")
    }

# Route for fetching weather data for two cities or airports

@app.route("/api/weather", methods=["POST"])
def airport_weather():
    data = request.get_json()
    city1 = data.get("city1")
    city2 = data.get("city2")
    if not city1 or not city2:
        return jsonify({"error": "Missing city or airport code"}), 400

    try:
        from_weather = fetch_weather(city1)
        to_weather = fetch_weather(city2)
        return jsonify({
            "from": from_weather,
            "to": to_weather
        })
    except Exception as e:
        print("Weather API Error:", e)
        return jsonify({"error": str(e)}), 500
    
# Route for flight recommendation

@app.route("/api/recommendation", methods=["POST"])
def recommend_route():
    data = request.get_json()
    from_weather = data.get("from")
    to_weather = data.get("to")

    if not from_weather or not to_weather:
        return jsonify({"error": "Missing weather data"}), 400

    prompt = f"""
You're a flight operations assistant. Based on current weather conditions at both departure and arrival cities, provide actionable advice for a pilot.

From City:
- Location: {from_weather['resolved_name']}, {from_weather['country']}
- Weather: {from_weather['weather']['description']}
- Temperature: {from_weather['weather']['temperature']} K
- Humidity: {from_weather['weather']['humidity']}%
- Wind Speed: {from_weather['weather']['wind_speed']} m/s
- Alerts: {from_weather['alert']}

To City:
- Location: {to_weather['resolved_name']}, {to_weather['country']}
- Weather: {to_weather['weather']['description']}
- Temperature: {to_weather['weather']['temperature']} K
- Humidity: {to_weather['weather']['humidity']}%
- Wind Speed: {to_weather['weather']['wind_speed']} m/s
- Alerts: {to_weather['alert']}

Give a short recommendation on route feasibility and risk level:
"""
    try:
        # Use Gemini API to generate recommendation
        # print(f"Generating recommendation with prompt: {prompt}")
        gemini_response = client.models.generate_content(model="gemini-2.0-flash", contents = [prompt])
        # print("Gemini response received", gemini_response)
        recommendation = gemini_response.candidates[0].content.parts[0].text
        print("Recommendation generated:", recommendation)

        return jsonify({
            "from": from_weather,
            "to": to_weather,
            "recommendation": recommendation
        })

    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": str(e)}), 500
