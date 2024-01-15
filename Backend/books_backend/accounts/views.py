from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import *
from .models import *
from rest_framework import generics

from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UserRegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class PreferencesAPIView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = PreferencesSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
