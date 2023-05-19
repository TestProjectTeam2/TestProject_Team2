from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField()

    class Meta:
        model = Order
        field = '__all__'
