from flask import Flask
from flask_cors import CORS
from .extensions import mongo
from flaskmongo.user.routes import main

def create_app(config_object='flaskmongo.settings'):
  app = Flask(__name__)
  app.config.from_object(config_object)

  mongo.init_app(app)

  app.register_blueprint(main)

  cors = CORS(app)

  return app
