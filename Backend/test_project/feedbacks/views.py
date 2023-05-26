from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from feedbacks.models import Feedback, FeedbackComment
from feedbacks.serializers import FeedbackCommentModelSerializer, FeedbackModelSerializer


class FeedbackAPIViewSet(viewsets.ModelViewSet):

    """ Standard ModelViewSet for Feedback model which implements CRUD with minor changes. """

    queryset = Feedback.objects.all()
    serializer_class = FeedbackModelSerializer
    # permission_classes = (IsAuthenticated,)

    @action(methods=["get"], detail=False, url_path=r"(?P<parent_id>\d+)/comments")
    def get_comments(self, request, parent_id=None):
        try:
            feedback = Feedback.objects.get(id=parent_id)  # Retrieves a comments' parent (feedback) by ID
            comments = FeedbackComment.objects.filter(feedback=feedback)  # Retrieves comments for a parent retrieved
            serializer = FeedbackCommentModelSerializer(comments, many=True)
            return Response(serializer.data)
        except (Feedback.DoesNotExist, FeedbackComment.DoesNotExist):
            return Response({"detail: Not found. "}, status=status.HTTP_404_NOT_FOUND)


class FeedbackCommentAPIViewSet(viewsets.ModelViewSet):

    """ Standard ModelViewSet for FeedbackComment model which implements CRUD with minor changes. """

    queryset = FeedbackComment.objects.all()
    serializer_class = FeedbackCommentModelSerializer
    # permission_classes = (IsAuthenticated,)
