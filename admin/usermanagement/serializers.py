from rest_framework import serializers

class UserIdSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()