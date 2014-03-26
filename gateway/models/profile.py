"""model venture information."""
from django.db import models


class Profile(models.Model):

    """store profile information."""

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

    school = models.CharField(
        "This is the name of my school...",
        max_length=140
    )

    major = models.CharField(
        "This is the name of my major...",
        max_length=140
    )

    degree = models.CharField(
        "This is the type of degree I have...",
        max_length=140
    )

    edudesc = models.CharField(
        "This is a description about this school/degree...",
        max_length=140
    )

    company = models.CharField(
        "This is the name of my work...",
        max_length=140
    )

    comtitle = models.CharField(
        "This is the name of my work position...",
        max_length=140
    )

    workdesc = models.CharField(
        "This is a description about this job...",
        max_length=140
    )

    class Meta:
        app_label = 'gateway'

