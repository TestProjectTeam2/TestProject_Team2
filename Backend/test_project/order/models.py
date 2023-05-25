from django.db import models
import uuid
from product.models import Product
from users.models import User
from decimal import Decimal


class Order(models.Model):
    DELIVERY = [
        ('SP', 'Store pickup'),
        ('TD', 'Targeted delivery'),
        ('MP', 'Mobile pickup'),
        ('PD', 'Postal delivery')
    ]
    PAYMENT = [
        ('PR', 'payment on receipt'),
        ('СD', 'Card'),
        ('SC', 'Social Card'),
        ('NC', 'Non-cash'),
        ('IN', 'Installments')
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    products = models.ManyToManyField(Product, verbose_name='Назва товару', related_name='orders')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True ,verbose_name='Користувач')
    first_name = models.CharField(max_length=30, verbose_name="Ім'я")
    last_name = models.CharField(max_length=50, verbose_name='Прізвище')
    phone = models.CharField(max_length=30, verbose_name='Номер телефону')
    email = models.CharField(max_length=100, null=True, blank=True)
    сity = models.CharField(max_length=30, verbose_name='Ваше місто')
    delivery_way = models.CharField(max_length=10, choices=DELIVERY, verbose_name='Спосіб доставки')
    payment = models.CharField(max_length=10, choices=PAYMENT)
    date = models.DateField(auto_now=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0, verbose_name='Сумма заказа')

    @property
    def total_price(self):
        total = 0
        for item in self.order_products.all():
            price = item.product.price * item.quantity
            disc = Decimal(item.product.discount / 100)
            total += price - (price * disc)
        return total

    def save(self, *args, **kwargs):
        self.total = self.total_price
        super().save(*args, **kwargs)


    class Meta:
        ordering = ['date']


class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1, verbose_name='Кількість')

    class Meta:
        verbose_name_plural = 'Order products'