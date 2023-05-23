from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from categories.models import Category
from categories.serializers import CategorySerializer


class CategoriesAPIViewSet(viewsets.ModelViewSet):

    """ Standard ModelViewSet which implements CRUD with minor changes. """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        if self.action == 'list':
            # Method .viewable() defined in category manager (models.py)
            # to prevent duplication of parent when listing children
            return Category.objects.viewable()
        else:
            return super().get_queryset()

    @action(methods=["get"], detail=False, url_path=r"(?P<slug>[-\w]+)/children")
    def children(self, request, slug=None):

        """ Method retrieves children objects of a parent slug endpoint entered. Returns 404 otherwise."""

        try:
            parent = Category.objects.get(slug__iexact=slug)  # gets parent's object slug (case insensitive)
            children = parent.get_children()
            serializer = self.get_serializer(children, many=True)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response({"message": "Parent category not found."}, status=status.HTTP_404_NOT_FOUND)
