from django.test import TestCase

from .models import Category


class CategoryModelTest(TestCase):

    def setUp(self):
        self.category = Category.objects.create(
            name='Test Category',
            slug='test-category',
            description='This is a test category',
            parent=None,
            is_active=True
        )

    def test_category_creation(self):
        self.assertEqual(self.category.name, 'Test Category')
        self.assertEqual(self.category.slug, 'test-category')
        self.assertEqual(self.category.description, 'This is a test category')
        self.assertIsNone(self.category.parent)
        self.assertTrue(self.category.is_active)

    def test_category_str_representation(self):
        self.assertEqual(str(self.category), 'Test Category')

    def test_category_absolute_url(self):
        expected_url = '/products/test-category/'
        self.assertEqual(self.category.get_absolute_url(), expected_url)
