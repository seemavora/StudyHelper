from flask import Flask, jsonify, request

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

    # # Encrypt the password
    # user["password"] = user["password"]

    # # Check for existing email address
    # if db.users.find_one({"email": user["email"]}):
    #   return jsonify({"error": "Email address already in use"}), 400

    # if db.users.insert_one(user):
    #   return jsonify(user), 200

    return jsonify({
      "message": "Hey I got the data",
      "username": user['username'],
      "email": user['email'],
      "password": user['password'],
      "passwordConfirm": user['passwordConfirm']
      }), 200

  def login(self):
    print(request.get_json())

    # Create the user object
    user = {
      "username": request.get_json().get("username"),
      "password": request.get_json().get("password")
    }

    return jsonify({
      "message": "Hey I got the data",
      "username": user['username'],
      "password": user['password']
      }), 200