from django.urls import path
from django.contrib import admin
from .views import *

urlpatterns = [
    path('api/order_create', OrderCreateAPi.as_view()),
    path('api/order_list', OrderGetAPi.as_view())
]