import praw
from kafka import KafkaConsumer
from json import loads

import pymongo
from pymongo import MongoClient
from pymongo import *

print("test\n")
consumer = KafkaConsumer(
                        'comentarios',
                        bootstrap_servers=['kafka:9092'],
                        auto_offset_reset='latest',
                        enable_auto_commit=True,
						value_deserializer=lambda x: loads(x.decode('utf-8')),
                        api_version=(0, 10, 1))


client = MongoClient(
                    '172.20.0.1', 
                    username="root", 
                    password="distribuidos", 
                    authSource='admin') #datos de conexion de bd
db = client["db"] #asi se accede a una bd
collection = db["reddit_comments"] #asi se accede a una coleccion

for message in consumer:
    #event_data = event.value
    print("Soy el consumidor y recibí este comentario:\n")
    
    print(message.value['id'])
    insertMongo = {
                    "id": message.value['id'],
                    "author": message.value['author'], 
					"body": message.value['comment'],
					"score": message.value['score'],
                    "subreddit": message.value['subreddit'],
					"post": message.value['submission']
                    }           
    collection.insert_one(insertMongo)
