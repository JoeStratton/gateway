"""model venture information."""
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Profile(models.Model):

    """store profile information."""
    '''user = models.ForeignKey(User, unique=True)'''

    bio = models.CharField(
        "This is my bio...",
        max_length=140
    )

    interests = models.CharField(
        "These are my interests...",
        max_length=140
    )

    goals = models.CharField(
        "These are my goals...",
        max_length=140
    )

    class Meta:
        app_label = 'gateway'
