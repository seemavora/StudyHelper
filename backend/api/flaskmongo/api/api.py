from flask import Flask, jsonify, request, Response
from flaskmongo.extensions import mongo
import requests
from os import path

class Api:
  def summary(self):
    print(request.get_json())

    try:
      basepath = path.dirname(__file__)
      filepath = path.abspath(path.join(basepath, "dummythiccsum.txt"))

      summary_file = open(filepath)
      summary_data = summary_file.read()
      summary_file.close()

      return jsonify({
        'message': summary_data
      }), 200

    except Exception as e:
      print(e)
    
    return jsonify({
        'error': 'Invalid Youtube link'
      }), 400
  
  def dictionary(self):
    try:

      word = request.get_json().get('word')

      print(word)

      r = requests.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word, headers={"Accept": "application/json","Content-Type": "application/json"})

      print(r.json())

      return (r.text, r.status_code)

    except Exception as e:
      print(e)
    
    return jsonify({
      }), 400
  