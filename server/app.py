from dotenv import load_dotenv
import os

load_dotenv()  # Load variables from .env

# Now you can access them like this:
secret = os.getenv("SECRET_KEY")
api_key = os.getenv("API_KEY")


