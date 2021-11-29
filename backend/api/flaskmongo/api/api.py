from flask import Flask, jsonify, request, Response
from flaskmongo.extensions import mongo
import requests
from os import path
from transformers import pipeline
from youtube_transcript_api import YouTubeTranscriptApi

class Api:
  def summary(self):
    youtube_video = request.get_json()['message']
    video_id = youtube_video.split("=")[1]
    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    result = ""
    for i in transcript:
        result += ' ' + i['text']
    
    

    summarizer = pipeline('summarization')


    num_iters = int(len(result)/1000)
    summarized_text = []
    for i in range(0,num_iters +1):
        start = 0
        start = (i*1000)
        end = (i+1) *1000
        out = summarizer(result[start:end])
        out = out[0]
        out = out['summary_text']
        summarized_text.append(out)
    print("********************************")
    print(summarized_text)
    strSummary = str(summarized_text)
    print(request.get_json())

    try:
      basepath = path.dirname(__file__)
      filepath = path.abspath(path.join(basepath, "sample.txt"))
      print("here")
      summary_file = open(filepath,'w')
      summary_data = summary_file.write(strSummary)
      print("woooohooo")
      summary_file.close()
      summary_file = open(filepath,'r')
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
  