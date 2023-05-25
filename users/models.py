from django.db import models

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

from datetime import date


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, last_name, phone, password=None) -> 'User':

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, last_name=last_name, phone=phone)

        user.set_password(password)
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=12, unique=True)
    address = models.CharField(max_length=256, null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'last_name', 'phone']

    @property
    def age(self) -> int:
        """
        Calculate the age of the user in years.
        Returns:
            int: The age of the user in years.
        """
        today = date.today()
        age = today.year - self.date_of_birth.year

        # Check if the person has already had a birthday this year
        if (today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day):
            age -= 1

        return age
