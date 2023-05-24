from django.db import models
from django.db.models import CASCADE
from django.core.validators import MinValueValidator, MaxValueValidator
from rest_framework.reverse import reverse

from users.models import User
from product.models import Product


class Feedback(models.Model):

    """ Model represents a feedback object """

    user = models.ForeignKey(User, on_delete=CASCADE, related_name="feedbacks")
    product = models.ForeignKey(Product, on_delete=CASCADE, auto_created="feedbacks")
    is_buyer = models.BooleanField(default=False)
    date_posted = models.DateField(editable=False, auto_now_add=True)
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField(max_length=400)
    pros = models.TextField(max_length=360, blank=True, null=True)
    cons = models.TextField(max_length=360, blank=True, null=True)
    votes = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "feedbacks"

    def get_absolute_url(self):
        return reverse('feedbacks:feedback-detail', args=[str(self.id)])

    def __str__(self) -> str:
        return f"fb{self.id}"


class FeedbackComment(models.Model):

    """ Model represents a Comment object attached to a Feedback model's object"""

    user = models.ForeignKey(User, on_delete=CASCADE, related_name="comments")
    feedback = models.ForeignKey(Feedback, on_delete=CASCADE, related_name="comments")
    comment = models.TextField(max_length=400)
    date_posted = models.DateField(editable=False, auto_now_add=True)

    class Meta:
        verbose_name_plural = "feedback comments"

    def get_absolute_url(self):
        return reverse('feedbacks:comments-detail', args=[str(self.id)])

    def __str__(self) -> str:
        return f"cm{self.id}"
