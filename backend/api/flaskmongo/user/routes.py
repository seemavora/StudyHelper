from flask import Blueprint
from flaskmongo.user.models import User
from flaskmongo.api.api import Api

main = Blueprint('main', __name__)

@main.route("/user/signup/", methods=["POST"])
def signup():
  return User().signup()

@main.route("/user/login/", methods=["POST"])
def login():
  return User().login()

@main.route('/api/summary/', methods=['POST'])
def getSummary():
  return Api().summary()

@main.route('/api/dictionary/', methods=['POST'])
def getDefinition():
  return Api().dictionary()