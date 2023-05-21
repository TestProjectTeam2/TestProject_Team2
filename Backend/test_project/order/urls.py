from django.urls import path
from django.contrib import admin
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/order_create', OrderCreateAPi.as_view())
]