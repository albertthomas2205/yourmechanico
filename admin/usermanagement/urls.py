from django.urls import path
from .views import send_user_id

urlpatterns = [
    path('send_user_id/', send_user_id, name='send_user_id'),
    # Add other URL patterns as needed
]