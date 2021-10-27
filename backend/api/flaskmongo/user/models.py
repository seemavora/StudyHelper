from flask import Flask, jsonify, request
from flaskmongo.extensions import mongo

class User:

  def signup(self):
    print(request.get_json())

    # Create the user object
    user = {
      "username": request.get_json().get("username"),
      "email": request.get_json().get("email"),
      "password": request.get_json().get("password"),
      "passwordConfirm": request.get_json().get("passwordConfirm")
    }

    if (user['password'] != user['passwordConfirm']):
      return jsonify({
        'message': 'Passwords do not match',
        'error_ID': 'pass' 
        }), 400

    # Check for existing email address
    if mongo.db.users.find_one({"email": user["email"]}):
      return jsonify({
        "message": "Email address already in use",
        'error_ID': 'email'
        }), 400

    mongo.db.users.insert(user)

    return jsonify({
      "message": "Hey I got the data",
      "username": user['username'],
      "email": user['email'],
      "password": user['password'],
      "passwordConfirm": user['passwordConfirm']
      }), 200

  def login(self):
    print(request.get_json())

    user = {
      "username": request.get_json().get("username"),
      "password": request.get_json().get("password")
    }

    # retrievedUser = mongo.db.users.find(user['username'])

    return jsonify({
      "message": "Hey I got the data",
      "username": user['username'],
      "password": user['password']
      }), 200