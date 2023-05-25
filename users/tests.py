import datetime

from django.test import TestCase

from .models import User


class UserTestCase(TestCase):
    def test_age(self):
        user = User.objects.create(
            date_of_birth=datetime.date(2000, 1, 1)
        )
        today = datetime.date.today()

        expected_age = today.year - user.date_of_birth.year

        self.assertEqual(user.age, expected_age)
