import pika, json

params = pika.URLParameters("amqps://fcasujwu:zbi133-f_v3Ek69aY4KyuRRYdaYhtQyZ@puffin.rmq2.cloudamqp.com/fcasujwu")

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    # print(method,body)
    print("haiiii") 
    properties = pika.BasicProperties(method)
    print(properties) 
    channel.basic_publish(exchange='', routing_key='user', \
    body=json.dumps(body), properties=properties) 

