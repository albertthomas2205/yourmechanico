# accounts/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserIdSerializer
from rest_framework import status
from . producers import publish
from rest_framework.response import Response
@api_view(['POST'])
def send_user_id(request):
    if request.method == 'POST':
        serializer = UserIdSerializer(data=request.data)
        if serializer.is_valid():
            user_id = serializer.validated_data['user_id']
            publish("block_user",user_id)
            
            # Do something with the user_id (you can print it for now)
            print(f"Received user_id: {user_id}")

            # Return a JSON response (you can customize this based on your requirements)
            data = {'status': 'success', 'message': 'User ID received successfully',}
            return Response(data, status=status.HTTP_200_OK)

       
        return Response({'status': 'error', 'message': 'Invalid data'})

    # If the request method is not POST, return an error response
    return Response({'status': 'error', 'message': 'Invalid request method'})
