import uuid

from django.db import models

from mptt.managers import TreeManager
from mptt.models import MPTTModel, TreeForeignKey


class CategoryManager(TreeManager):
    """ Custom manager to handle Category objects as tree structure without child objects duplicating"""
    def viewable(self):
        queryset = self.get_queryset().filter(level=0)
        return queryset


class Category(MPTTModel):
    """ Category model inherits from a side application class MPTT designed for more
    convenient work with model tree structure """

    objects = CategoryManager()  # Use of a custom manager defined above

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=120, db_index=True, unique=True)
    slug = models.SlugField(unique=True)
    description = models.TextField(null=True, blank=True)
    parent = TreeForeignKey(   # MPTT model Field represents a parent of subcategory (if exists) in tree structure.
        "self",
        blank=True,
        null=True,
        related_name="child",
        on_delete=models.CASCADE
    )
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'categories'

    def get_absolute_url(self):
        return f"/products/{self.slug}/"

    def __str__(self) -> str:
        return self.name
