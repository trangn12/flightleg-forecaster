**AI Flight Advisory System**

A full-stack application that provides pilots with AI-generated route recommendations based on real-time weather data between two airports. It features a 3D interactive globe to visualize selected routes and weather conditions.

**Project Demo**
https://drive.google.com/file/d/1FvwD3d-xEL2zSOXKCBwhE3veMM0LMoRl/view

**Features**

3D interactive globe (using react-globe.gl)

Airport selection & route visualization

Real-time weather data via OpenWeatherMap

AI-generated flight briefings with Gemini Pro (Google)

Backend powered by Flask + Python

CORS-enabled API routing and JSON response handling

**Getting Started**

**Prerequisites
**
Node.js

Python 3

pip or pipenv

OpenWeatherMap API key

Gemini API key (via Google)

**Frontend Setup (React)**

cd client
npm install
npm run start

**Backend Setup (Flask)**

cd server
pip install -r requirements.txt

Create a .env file in server/:

WEATHER_KEY=your_openweather_key
GEMINI_API_KEY=your_gemini_key

Then run:

flask run

**File Structure**

root/
├── server/
│   ├── app.py
│   ├── Airports.txt
│   └── .env
├── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── GlobeComponent/
│   │   │   │   ├── GlobeComponent.js
│   │   │   │   └── GlobeComponent.module.css
│   │   │   └── Header/
│   │   │       ├── Header.js
│   │   │       └── SearchForm.js
│   │   ├── Airports.js
│   │   └── App.css
└── README.md

**AI Briefing Logic**

The backend compiles weather info for two airports and sends it as a prompt to Gemini. The response includes:

Detailed weather summaries

Route feasibility

Takeoff/landing considerations

Risk level & safety notes

**Contact**

Built by Trang Nguyen
Email: trangnguyen@uci.edu
GitHub: github.com/trangn12
