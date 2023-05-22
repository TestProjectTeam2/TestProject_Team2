from rest_framework import serializers
from .models import Order
from users.models import User
from product.models import Product


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='user', queryset=User.objects.all())
    name = serializers.SlugRelatedField(many=True, slug_field='name', queryset=Product.objects.all())
    id = serializers.SlugRelatedField(many=True, slug_field='id', queryset=Product.objects.all())
    discount = serializers.SlugRelatedField(many=True, slug_field='discount', queryset=Product.objects.all())
    price = serializers.SlugRelatedField(many=True, slug_field='price', queryset=Product.objects.all())

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        user = self.context['request'].user
        if user.is_authenticated:
            self.fields['first_name'].default = user.name
            self.fields['last_name'].default = user.last_name
            self.fields['phone'].default = user.phone
            self.fields['email'].default = user.email


    class Meta:
        model = Order
        fields = '__all__'