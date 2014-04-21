"""model venture information."""
from django.db import models


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

    class Meta:
        app_label = 'gateway'
