import datetime
from django.db import migrations, models


# This Django migration adds a new field called travel_date to the Bus model in your bookings app.



class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0003_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='bus', 
            name='travel_date', 
            field=models.DateField(default=datetime.date(2025, 4, 24)), 
            preserve_default=False,
        ),
    ]
