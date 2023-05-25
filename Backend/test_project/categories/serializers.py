from rest_framework import serializers

from categories.models import Category


class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class CategorySerializer(serializers.ModelSerializer):
    child = RecursiveField(many=True, read_only=True)
    slug = serializers.SlugField(read_only=False)

    class Meta:
        model = Category
        fields = ("id", "name", "slug", "description", "is_active", "parent", "child")
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
