"""model venture information."""
from django.db import models
from gateway.models.Aha import Aha
from gateway.models.Elevator import Elevator
from gateway.models.Gap import Gap
from gateway.models.Survey import Survey
from gateway.models.Interest import Interest


class Venture(models.Model):

    """store venture information."""

    STEP_IN_PROGRESS_CHOICES = (
        ('1', 'Aha!!! moment'),
        ('2', 'Research'),
        ('3', 'Survey'),
        ('4', 'Feedback'),
        ('5', 'Elevator')
    )

    title = models.CharField(
        "venture's official title",
        max_length=30
    )

    image = models.CharField(
        "name of the jpeg image stored in static/images",
        max_length=30
    )

    progress = models.PositiveIntegerField(
        "progress as integer (out of 100)"
    )

    step = models.CharField(
        "number of current step in the Entrepreneurial process",
        max_length=1,
        choices=STEP_IN_PROGRESS_CHOICES
    )

    hook = models.CharField(
        "tweet sized hook line for the venture",
        max_length=140
    )
    """Foreign keys for minigame models"""
    """ForeignKey are set to not constrained due to framework test issues"""
    aha = models.ForeignKey(
        Aha,
        db_constraint=False
    )

    elevator = models.ForeignKey(
        Elevator,
        db_constraint=False
    )

    gap = models.ForeignKey(
        Gap,
        db_constraint=False
    )

    survey = models.ForeignKey(
        Survey,
        db_constraint=False
    )

    interest = models.ForeignKey(
        Interest,
        db_constraint=False
    )

    class Meta:
        app_label = 'gateway'
