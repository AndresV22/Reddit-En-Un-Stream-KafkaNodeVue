import praw
from kafka import KafkaProducer

#Se crea productor
producer = KafkaProducer(bootstrap_servers = 'localhost:9092', value_serializer = lambda x: dumps(x).encode('utf-8'))

reddit = praw.Reddit(client_id='V5uor3c5ZmD4nQ',client_secret='ljuy3utnTTcQAV-dzH0642MaXAuciQ',user_agent='lab_distribuidos')

#Esto te muestra los comentarios de un usuario en especifico, pero no lo uso para filtrar
#comments = reddit.redditor("spez").comments.new(limit=None)


#Se filtra los comentarios de la subreddit 
for comment in reddit.subreddit("learnpython").stream.comments():
    submission = reddit.submission(id=comment.submission) 
    if submission.over_18 == True:
        print("filtrado\n")
    else:
        print("comentario\n")
        commentAuthor = comment.author
        commentBody = comment.body
        commentScore = comment.score
        commentId = comment.id
        submissionId = submission.id
        submissionTitle = submission.title
        subreddit = comment.subreddit
        data = {'comment': commentBody, 'author': str(commentAuthor), 'score': commentScore, 'id': commentId, 'idSubmission': submissionId, 'submission': str(submissionTitle), 'subreddit': str(subreddit)}
        print(data,"\n")
        #Se publican los comentarios en el topico "comentarios"
        producer.send('comentarios', value = data)


