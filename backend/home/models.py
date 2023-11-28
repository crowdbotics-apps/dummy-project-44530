from django.conf import settings
from django.db import models


class Expense(models.Model):
    "Generated Model"
    expenseName = models.BigIntegerField()
    user_id = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="expense_user_id",
    )
