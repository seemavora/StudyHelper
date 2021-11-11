from flask import Blueprint
from flaskmongo.user.models import User

main = Blueprint('main', __name__)

@main.route("/user/signup/", methods=["POST"])
def signup():
  return User().signup()

@main.route("/user/login/", methods=["POST"])
def login():
  return User().login()