from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='user', queryset=User.objects.all())
    name = serializers.SlugRelatedField(many=True, slug_field='name', queryset=Product.objects.all())
    id = serializers.SlugRelatedField(many=True, slug_field='id', queryset=Product.objects.all())
    discount = serializers.SlugRelatedField(many=True, slug_field='discount', queryset=Product.objects.all())
    price = serializers.SlugRelatedField(many=True, slug_field='price', queryset=Product.objects.all())

    class Meta:
        model = Order
        fields = '__all__'