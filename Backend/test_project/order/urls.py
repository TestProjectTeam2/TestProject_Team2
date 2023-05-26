from .views import OrderAPIViewSet, OrderProductAPIViewSet
from django.urls import path, include
from rest_framework import routers


app_name = 'order'

urlpatterns = []

router = routers.SimpleRouter()

router.register('product', OrderProductAPIViewSet)
router.register('', OrderAPIViewSet)


urlpatterns += router.urls

