from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from django.utils.translation import gettext_lazy as _

from users.models import User
from product.models import Product


class Feedback(models.Model):
    """Feedback model"""
    user = models.ForeignKey(User, verbose_name=_('user'), related_name='feedbacks', on_delete=models.CASCADE)
    comment = models.TextField(_('comment'), blank=True, null=True)
    rate = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    # order = models.ForeignKey('Order', on_delete=models.CASCADE)
    Advantages = models.TextField(max_length=3000)
    Disadvantages = models.TextField(max_length=3000)
    video = models.FileField(upload_to='videos/')
    photo = models.ImageField(upload_to='photos/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
