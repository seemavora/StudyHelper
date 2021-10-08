import time
from flask import Flask
from flask_cors import CORS
import pymongo

app = Flask(__name__)
cors = CORS(app)

client = pymongo.MongoClient("localhost", 27017)
db = client.user_login_system

from user import routes

@app.route('/time')
def get_current_time():
    return {'time': time.time()}