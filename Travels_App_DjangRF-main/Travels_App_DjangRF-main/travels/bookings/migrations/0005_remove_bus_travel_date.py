from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0004_bus_travel_date'),
    ]

 
    operations = [
        migrations.RemoveField(
            model_name='bus', 
            name='travel_date', 
        ),
    ]
