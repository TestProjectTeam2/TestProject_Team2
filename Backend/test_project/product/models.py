import uuid
from unidecode import unidecode

from django.db import models
from django.utils.text import slugify

from categories.models import Category


class Product(models.Model):
    """Model representing a product."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    count = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.IntegerField(null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey('Brand', on_delete=models.CASCADE, related_name='products')
    slug = models.SlugField(unique=True, editable=False)
    url_img = models.CharField(max_length=255, null=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return f'Product: {self.name}'

    def __repr__(self):
        return f"Product(id={self.id})"

    def save(self, *args, **kwargs):
        """Save the object with a slug based on the name."""
        self.slug = slugify(unidecode(str(self.name)))
        super().save(*args, **kwargs)


class Brand(models.Model):
    """A model representing the brand of the product."""
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return f'Brand: {self.name}'

    def __repr__(self):
        return f"Brand(id={self.id})"

    def save(self, *args, **kwargs):
        """Save the object with a slug based on the name."""
        self.slug = slugify(unidecode(str(self.name)))
        super().save(*args, **kwargs)
