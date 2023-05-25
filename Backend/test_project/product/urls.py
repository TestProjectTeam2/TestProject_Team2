from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet, BrandViewSet, ProductsByCategoryListView

app_name = "products"

router = DefaultRouter()
router.register("brands", BrandViewSet)
router.register("", ProductViewSet)
router.register(r'category/(?P<category_slug>[-\w]+)', ProductsByCategoryListView, basename='products-by-category')

urlpatterns = [
    path("", include(router.urls)),
]
