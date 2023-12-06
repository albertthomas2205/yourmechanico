import pika, json, os, django
from django.http import JsonResponse
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "user.settings")
django.setup()
from accounts.views import block_user
from accounts.models import CustomUser


params = pika.URLParameters("amqps://fcasujwu:zbi133-f_v3Ek69aY4KyuRRYdaYhtQyZ@puffin.rmq2.cloudamqp.com/fcasujwu")

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='user') # this will match the 
# routing key in the producer of the flask app


def callback(ch, method, properties, body):
    print('Received in user')
    print(method,properties)
    
    user = CustomUser.objects.get(id=body)
    if user.is_active:
        
        user.is_active = False
    else:
        user.is_active = True
    user.save() 
    print(body) 
    data = json.loads(body)
    print(data)
    print('Added a comment')


channel.basic_consume(queue='user', on_message_callback=callback, \
auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()
