from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'phone_number', 'date_of_birth', 'city', 'country', 'newsletter_subscription', 'password']
        extra_kwargs = {
            'password': {'write_only': True},  # Make the password write-only
            'id': {'read_only': True},  # Prevent writing the 'id' field
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['first_name'] = user.first_name 
        token['last_name'] = user.last_name 
        # ...

        return token


class PreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['genre', 'author', 'book', 'duration']