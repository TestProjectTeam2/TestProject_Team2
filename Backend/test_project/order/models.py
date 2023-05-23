from django.db import models
import uuid
from product.models import Product
from users.models import User


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
    id = models.UUIDField(primary_key= True, default=uuid.uuid4, editable=False)
    products = models.ManyToManyField(Product, verbose_name='Назва товару', related_name='order')
    quantity = models.IntegerField(default=1, verbose_name='Кількість')
    user = models.ForeignKey(User, on_delete=models.SET('видалений користувач'), null=True ,verbose_name='Користувач')
    first_name = models.CharField(max_length=30, verbose_name="Ім'я")
    last_name = models.CharField(max_length=50, verbose_name='Прізвище')
    phone = models.CharField(max_length=30, verbose_name='Номер телефону')
    email = models.CharField(max_length=100, null=True, blank=True)
    сity = models.CharField(max_length=30, verbose_name='Ваше місто')
    delivery_way = models.CharField(max_length=10, choices=DELIVERY, verbose_name='Спосіб доставки')
    payment = models.CharField(max_length=10, choices=PAYMENT)
    data = models.DateField(auto_now=True)

    @property
    def total_price(self):
        total = 0
        for product in self.name.all():
            total += product.price * self.quantity
        return total

    class Meta:
        ordering = ['data']
