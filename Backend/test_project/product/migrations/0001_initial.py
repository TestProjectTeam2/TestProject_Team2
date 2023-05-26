from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('slug', models.SlugField(editable=False, unique=True)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('count', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount', models.IntegerField(null=True)),
                ('slug', models.SlugField(blank=True, default=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False), unique=True)),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='product.brand')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='categories.category')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
