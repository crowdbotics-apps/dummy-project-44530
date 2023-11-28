from django.conf import settings
from django.db import models


class Expense(models.Model):
    "Generated Model"
    user_id = models.OneToOneField(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="expense_user_id",
    )
    name = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    amount = models.BigIntegerField(
        null=True,
        blank=True,
    )
    time = models.DateTimeField(
        auto_now=True,
        null=True,
        blank=True,
    )
