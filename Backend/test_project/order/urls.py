from django.urls import path
from django.contrib import admin
from .views import *

urlpatterns = [
    path('api/v1/order_create', OrderCreateAPi.as_view()),
    path('api/v1/order_list', OrderGetAPi.as_view())
]