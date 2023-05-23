from rest_framework import viewsets
from .serializers import OrderSerializer
from .models import *
from rest_framework.permissions import IsAuthenticated

class OrderAPIViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]