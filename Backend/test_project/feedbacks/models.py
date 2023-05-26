from django.db import models
from django.db.models import SET_NULL, CASCADE
from django.core.validators import MinValueValidator, MaxValueValidator

from users.models import User
from product.models import Product


class Feedback(models.Model):

    """ Model represents a feedback object """

    user = models.ForeignKey(User, on_delete=SET_NULL, related_name="feedbacks", null=True, blank=True)  # TODO Remove after User fixed up
    product = models.ForeignKey(Product, on_delete=CASCADE, auto_created="feedbacks", null=True, blank=True)  # TODO Remove after User fixed up
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
        return f"/feedbacks/{self.id}/"

    def __str__(self) -> str:
        return f"fb{self.id}"


class FeedbackComment(models.Model):

    """ Model represents a Comment object attached to a Feedback model's object"""

    user = models.ForeignKey(User, on_delete=SET_NULL, related_name="comments", null=True, blank=True)
    feedback = models.ForeignKey(Feedback, on_delete=CASCADE, related_name="comments")
    comment = models.TextField(max_length=400)
    date_posted = models.DateField(editable=False, auto_now_add=True)

    class Meta:
        verbose_name_plural = "feedback_comments"

    def get_absolute_url(self):
        return f"/feedbacks/comments/{self.id}/"

    def __str__(self) -> str:
        return f"cm{self.id}"
