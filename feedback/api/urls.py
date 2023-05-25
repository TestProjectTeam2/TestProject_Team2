from django.urls import path

from feedback.views import FeedbackListView, FeedbackCreateView

urlpatterns = [
    path('feedback/<user_pk>/', FeedbackListView.as_view(), name='feedback-list'),
    path('feedback/', FeedbackCreateView.as_view(), name='feedback-create'),
]
