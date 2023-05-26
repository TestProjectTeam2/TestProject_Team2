from rest_framework import serializers
from rest_framework.relations import SlugRelatedField

from categories.models import Category


class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class CategorySerializer(serializers.ModelSerializer):
    child = RecursiveField(many=True, read_only=True)
    # Changed serialization of parent category to be displayed by slug value instead of weird UUID value.
    parent = SlugRelatedField(slug_field='slug', queryset=Category.objects.all(), required=False, allow_null=True)

    class Meta:
        model = Category
        fields = ("id", "name", "slug", "description", "is_active", "parent", "child")
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
