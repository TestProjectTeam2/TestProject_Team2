from rest_framework import serializers

from feedbacks.models import Feedback, FeedbackComment


class FeedbackModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = "__all__"


class FeedbackCommentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackComment
        fields = "__all__"
