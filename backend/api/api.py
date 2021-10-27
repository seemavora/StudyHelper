import time
from flask import Flask
from flask_cors import CORS
import pymongo

app = Flask(__name__)
cors = CORS(app)

from user import routes