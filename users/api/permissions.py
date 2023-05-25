from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Allow access only for owner.
    """
    def has_object_permission(self, request, view, obj):
        return (
            request.method in permissions.SAFE_METHODS or
            request.user == obj.user
        )


class IsSeller(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return (
            request.method in permissions.SAFE_METHODS or
            request.user == obj.seller
        )


class IsBuyer(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return (
            request.method in permissions.SAFE_METHODS or
            request.user == obj.buyer
        )
