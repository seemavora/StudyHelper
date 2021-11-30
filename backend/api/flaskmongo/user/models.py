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

    # Check for existing username
    if not (mongo.db.users.find_one({'username' : user["username"]})):
      #print("user does not exist") #test print
      return jsonify({
        "message": 'username does not exist',
        'error_ID': 'username'
        }), 400

    #retrieve the existing user data
    retrieveUser = mongo.db.users.find({'username' : user["username"]})#, {'password': 1, "_id": 0})

    #store the password, ID, and email for future use
    for key in retrieveUser:
      password = (key["password"])
      id = (key["_id"])
      email = (key["email"])

    #check if the password entered matches the account's password
    if user['password'] != password:
      return jsonify({
        'message': 'Incorrect password',
        'error_ID': 'pass' 
        }), 400

    #if user["password"] != password:
    #  print("invalid password")
    #else:
    #  print("valid password")

    #store the ID (or email) in localStorage

    print(str(id))
    print(password)
    print(email)

    return jsonify({
      "message": "Hey I got the data",
      "username": user['username'],
      "password": user['password'],
      "ID": str(id)
      }), 200
  