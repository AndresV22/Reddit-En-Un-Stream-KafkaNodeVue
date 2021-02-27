from kafka import KafkaProducer
from json import dumps

import pymongo
from pymongo import MongoClient
from pymongo import *

#Se crea productor
'''producer = KafkaProducer(
              bootstrap_servers = 'kafka:9092', 
              value_serializer = lambda x: dumps(x).encode('utf-8'),
              api_version=(0, 10, 1))'''

client = MongoClient(
                    '172.20.0.1', 
                    username="root", 
                    password="distribuidos", 
                    authSource='admin') #datos de conexion de bd
db = client["db"] #asi se accede a una bd
collection = db["reddit_comments"] #asi se accede a una coleccion
reddit_comments = collection.find()

for comment in reddit_comments:
  print("Soy el productor y estoy enviando el siguiente mensaje:\n")
  print(comment)
  #Para obtener atributo del documento obtenido de la base de datos
  id = comment['id']
  author = comment['author'] 
  body = comment['body']
  score = comment['score']
  subreddit = comment['subreddit']
  post = comment['post']

  data = {'id': id,
          'comment': body, 
          'author': author, 
          'score': score, 
          'submission': post, 
          'subreddit': subreddit
        }
  
  
  #Se envían los comentarios al topico "estadisticas"
  #producer.send('stats', value = data)
