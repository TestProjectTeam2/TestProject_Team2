from django.contrib import admin

from feedbacks.models import Feedback, FeedbackComment


admin.site.register(Feedback)
admin.site.register(FeedbackComment)
