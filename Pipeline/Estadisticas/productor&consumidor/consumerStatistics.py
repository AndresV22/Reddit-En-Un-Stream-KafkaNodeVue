from kafka import KafkaConsumer
from json import loads
from textblob import TextBlob
import pycountry
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize 
import psycopg2



consumer = KafkaConsumer('stats',bootstrap_servers=['kafka:9092'],auto_offset_reset='earliest',enable_auto_commit=True,value_deserializer=lambda x: loads(x.decode('utf-8')),api_version=(0, 10, 1))


vocales = "aeiouAEIOU"
consonantes = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ"


def contarVocalesyConsonantes(string):
    voca=0
    cons=0
    mayus=0
    minus=0
    for letra in string:
        if letra.isupper():
            mayus = mayus+1
        elif letra.islower():
            minus = minus+1
        if letra in vocales:
            voca = voca+1
        elif letra in consonantes:
            cons = cons+1
    return voca, cons, mayus, minus


def contarStopWords(text):
    try:
        lan = text.detect_language()
    except:
        print('no se puede detectar el idioma, ni stopwords')
        return [], 0, [], 0, " "
    idioma = pycountry.languages.get(alpha_2=lan)
    nombreIdioma = TextBlob(idioma.name).lower()
    try:
        stop_words = set(stopwords.words(str(nombreIdioma)))
    except:
        print('No hay stopword en este idioma')
        return [], 0, [], 0, nombreIdioma
    palabras_filtradas= [w for w in text.words if not w in stop_words]
    stop_words_sentence= [w for w in text.words if w in stop_words]
    return palabras_filtradas, len(palabras_filtradas), stop_words_sentence, len(stop_words), nombreIdioma 


#Postgresql
connection = psycopg2.connect(
            host="postgresdb",
            database="distribuidos",
            user="postgres",
            password="distribuidos")

cursor= connection.cursor()

for message in consumer:
    print(message)
    id = message.value['id']
    autor = message.value['author']
    comentario = message.value['comment']
    score = message.value['score']
    post = message.value['submission']
    subreddit = message.value['subreddit']
    text = TextBlob(comentario)
    palabras_sin_stopwords= []
    palabras_stopwords=[]
    idioma = ""
    numpalabrasSinSW= 0
    numSW = 0
    numVoc = 0
    numCons = 0
    numMayus = 0
    numMinus = 0
    palabras_sin_stopwords, numpalabrasSinSW, palabras_stopwords, numSW, idioma = contarStopWords(text)
    numVoc, numCons, numMayus, numMinus = contarVocalesyConsonantes(text)

    textstr = str(text)
    idiomastr = str(idioma)
    
    name_Table="comentarios"
    sqlCreateTable = "create table if not exists "+name_Table+" (id serial PRIMARY KEY, post_id varchar(128), author varchar(128), comentario text, score int, total_palabras text,num_voca int,num_cons int,num_mayus int,num_minus int,num_palabras_sin_sw int ,num_sw int,idioma varchar(128),subreddit text,post text)"
    cursor.execute(sqlCreateTable)
    connection.commit()
    cursor.execute(
        "insert into comentarios (post_id, author, comentario, score, total_palabras, num_voca, num_cons, num_mayus, num_minus, num_palabras_sin_sw, num_sw, idioma, subreddit, post) values (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
        (id,autor,comentario,score,textstr,numVoc,numCons,numMayus,numMinus,numpalabrasSinSW,numSW,idiomastr,subreddit,post))

cursor.close()
connection.close()