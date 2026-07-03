from rest_framework import serializers
from .models import Food

class FoodSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = Food
        fields = "__all__"