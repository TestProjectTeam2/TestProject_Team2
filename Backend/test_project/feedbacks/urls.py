from rest_framework.routers import SimpleRouter

from .views import FeedbackAPIViewSet, FeedbackCommentAPIViewSet

app_name = "feedbacks"


urlpatterns = []


# Router section
router = SimpleRouter()

router.register(r"comments", FeedbackCommentAPIViewSet, basename="comments")
router.register("", FeedbackAPIViewSet)


urlpatterns += router.urls
