from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import AllowAny

from feedback.api.serializers import FeedbackSerializer

from feedback.models import Feedback


class FeedbackListView(ListAPIView):
    """List of feedbacks about product"""
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = (AllowAny,)
    ordering_fields = ('-created_at', )

    def get_queryset(self):
        return Feedback.objects.filter(order__seller=self.kwargs['user_pk'])


class FeedbackCreateView(CreateAPIView):
    """View for create feedback about product"""
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    #TODO: when permission classes was been created:)

    # permission_classes = (IsOwnerOrReadOnly, IsBuyer, )
