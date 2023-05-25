from rest_framework import serializers
from .models import Order, OrderProduct


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        user = self.context['request'].user
        if user.is_authenticated:
            self.fields['first_name'].default = user.name
            self.fields['last_name'].default = user.last_name
            self.fields['phone'].default = user.phone
            self.fields['email'].default = user.email


class OrderProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = 'OrderProduct'
        fields = 'quantity'
