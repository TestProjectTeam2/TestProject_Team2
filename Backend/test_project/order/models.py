from django.db import models
import uuid
from users.models import User
from product.models import Product


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
    order_id = models.UUIDField(primary_key= True, default=uuid.uuid4, editable=False)
    name = models.ManyToManyField(Product, verbose_name='Назва товару')
    id = models.ManyToManyField(Product, verbose_name='Номер товару')
    price = models.ManyToManyField(Product, verbose_name='Ціна')
    quantity = models.IntegerField(default=1, verbose_name='Кількість')
    discount = models.ManyToManyField(Product, verbose_name='Знижка')
    user = models.ForeignKey(User, on_delete=models.SET('видалений користувач'), null=True ,verbose_name='Користувач')
    first_name = models.CharField(max_length=30, verbose_name="Ім'я")
    last_name = models.CharField(max_length=50, verbose_name='Прізвище')
    phone = models.CharField(max_length=30, verbose_name='Номер телефону')
    email = models.CharField(max_length=100, null=True, blank=True)
    сity = models.CharField(max_length=30, verbose_name='Ваше місто')
    delivery_way = models.CharField(max_length=10, choises=DELIVERY, verbose_name='Спосіб доставки')
    payment = models.CharField(max_length=10,choices=PAYMENT)

    @property
    def total_price(self):
        total = 0
        for product in self.name.all():
            total += product.price * self.quantity
        return total


