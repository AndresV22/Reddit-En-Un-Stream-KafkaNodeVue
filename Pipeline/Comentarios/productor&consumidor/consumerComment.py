import praw
from kafka import KafkaConsumer
from json import loads

import pymongo
from pymongo import MongoClient
from pymongo import *

consumer = KafkaConsumer('comentarios',bootstrap_servers=['localhost:9092'],auto_offset_reset='earliest',enable_auto_commit=True,
						 value_deserializer=lambda x: loads(x.decode('utf-8')),api_version=(0, 10, 1))


client = MongoClient('localhost', username='root', password='distribuidos', authSource='db', authMechanism='SCRAM-SHA-1') #datos de conexion de bd
db = client["db"] #asi se accede a una bd
collection = db["reddit_comments"] #asi se accede a una coleccion

for message in consumer:
    insertMongo = {"id": message.value['id'],
                    "author": message.value['author'], 
					"body": message.value['comment'],
					"score": message.value['score'],
                    "subreddit": message.value['subreddit'],
					"post": message.value['submission']
                    }           
    print(message)
    collection.insert_one(insertMongo)
