from .views import *
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('login/', MyTokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token-refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('preferences/', PreferencesAPIView.as_view(), name='user-preferences'),
]