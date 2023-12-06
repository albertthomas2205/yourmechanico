from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
  
    path("register/", views.RegisterView.as_view(), name="user-register"),
    path("login/", views.LoginView.as_view(), name="user-login"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('otp/', views.OtpRequestView.as_view(), name='otp_view'),
    path('users/',views. ListUser.as_view(), name='user-list'),
    path('block-user/', views.block_user, name='block_user')
 
]
