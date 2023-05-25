from django.contrib import admin
from .models import Feedback


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')
    list_display = ('created_at', 'comment')
    fieldsets = (
        (None,
         {'fields': (
             'user', 'product', 'order', 'comment', 'created_at', 'updated_at')}),
    )
