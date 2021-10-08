from flask import Flask, jsonify, request
from api import db

class User:

  def signup(self):
    print(request.get_json())

    # Create the user object
    user = {
      "name": request.get_json().get("name"),
      "email": request.get_json().get("email"),
      "password": request.get_json().get("password")
    }

    # # Encrypt the password
    # user["password"] = user["password"]

    # # Check for existing email address
    # if db.users.find_one({"email": user["email"]}):
    #   return jsonify({"error": "Email address already in use"}), 400

    # if db.users.insert_one(user):
    #   return jsonify(user), 200

    return jsonify({
      "message": "Hey I got the data",
      "name": user['name'],
      "email": user['email'],
      "password": user['password']
      }), 200