import praw
from kafka import KafkaConsumer
from json import loads

consumer = KafkaConsumer('stats',bootstrap_servers=['kafka:9092'],auto_offset_reset='earliest',enable_auto_commit=True,
						 value_deserializer=lambda x: loads(x.decode('utf-8')),api_version=(0, 10, 1))


for message in consumer:
    print("estoy recibiending")
    print(message.value)
