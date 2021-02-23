from kafka import KafkaProducer
from json import dumps

#Se crea productor
producer = KafkaProducer(bootstrap_servers = 'localhost:9092', value_serializer = lambda x: dumps(x).encode('utf-8'),api_version=(0, 10, 1))


