# Generated by Django 4.0.3 on 2022-09-07 10:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('NearBeach', '0019_remove_request_for_change_rfc_status_update_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request_for_change',
            name='rfc_status_old',
        ),
    ]
