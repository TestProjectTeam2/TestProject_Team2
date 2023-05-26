from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="API TechZone Documentation",
        default_version='v1',
        description="API for TechZone online store",
        terms_of_service="https://www.example.com/terms/",
        contact=openapi.Contact(email="artem.kozatskyi@gmail.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/categories/', include("categories.urls")),
    path('api/product/', include('product.urls')),
    path('api/order/', include('order.urls')),
    path('api/feedbacks/', include("feedbacks.urls")),
]
