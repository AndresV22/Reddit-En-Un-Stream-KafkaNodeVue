import praw
from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers = 'localhost:9092', value_serializer = lambda x: dumps(x).encode('utf-8'))

reddit = praw.Reddit(client_id='V5uor3c5ZmD4nQ',client_secret='ljuy3utnTTcQAV-dzH0642MaXAuciQ',user_agent='lab_distribuidos')

comments = reddit.redditor("nottheonion").comments.new(limit=None)

