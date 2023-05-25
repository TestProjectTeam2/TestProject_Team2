from rest_framework import serializers

from feedback.models import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    #TODO: when UserSerializer was been created:)
    # user = UserSerializer(default=serializers.CurrentUserDefault())

    class Meta:
        model = Feedback
        fields = ('id', 'user', 'comment', 'created_at', 'order')

    def validate(self, attrs):
        if not attrs['order'].is_finished:
            raise serializers.ValidationError('The order is not finished')
        return attrs
