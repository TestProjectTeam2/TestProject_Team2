from django.db import models

from django.contrib.auth.models import AbstractUser

from datetime import date


class User(AbstractUser):
    address = models.CharField(max_length=256, null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=12, unique=True, null=True)

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
