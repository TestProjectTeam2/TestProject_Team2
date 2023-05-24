from .views import OrderAPIViewSet
from django.urls import path
from rest_framework import routers


app_name = 'order'

urlpatterns = []

router = routers.SimpleRouter()

router.register('', OrderAPIViewSet)

urlpatterns += router.urls
