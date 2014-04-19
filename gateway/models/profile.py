"""model venture information."""
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class UserProfile(models.Model):

    user = models.ForeignKey(User, unique=True)

    """store profile information."""
    '''user = models.ForeignKey(User, unique=True)'''

    bio = models.CharField(
        "This is my bio...",
        max_length=140,
        blank=True
    )

    interests = models.CharField(
        "These are my interests...",
        max_length=140,
        blank=True
    )

    goals = models.CharField(
        "These are my goals...",
        max_length=140,
        blank=True
    )

    school = models.CharField(
        "This is the name of my school...",
        max_length=140,
        blank=True
    )

    major = models.CharField(
        "This is the name of my major...",
        max_length=140,
        blank=True
    )

    degree = models.CharField(
        "This is the type of degree I have...",
        max_length=140,
        blank=True
    )

    edudesc = models.CharField(
        "This is a description about this school/degree...",
        max_length=140,
        blank=True
    )

    company = models.CharField(
        "This is the name of my work...",
        max_length=140,
        blank=True
    )

    comtitle = models.CharField(
        "This is the name of my work position...",
        max_length=140,
        blank=True
    )

    workdesc = models.CharField(
        "This is a description about this job...",
        max_length=140,
        blank=True
    )

    class Meta:
        app_label = 'gateway'

    def __unicode__(self):
        return u'Profile of user: %s' % self.user.username
