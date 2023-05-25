from rest_framework import viewsets
from .serializers import OrderSerializer, OrderProductSerializer
from .models import Order, OrderProduct
from rest_framework.permissions import IsAuthenticated


class OrderAPIViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]


class OrderProductAPIViewSet(viewsets.ModelViewSet):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer