from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet, BrandViewSet

app_name = "products"

router = DefaultRouter()
router.register("brands", BrandViewSet)
router.register("", ProductViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
