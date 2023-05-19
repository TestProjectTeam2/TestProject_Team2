from rest_framework.routers import SimpleRouter

from .views import CategoriesAPIViewSet

app_name = "categories"

urlpatterns = []

# Router section
router = SimpleRouter()

router.register("", CategoriesAPIViewSet)

urlpatterns += router.urls




