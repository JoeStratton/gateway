"""Research Minigame Information."""
"""Will change based on number of questions"""
from django.db import models


class Research(models.Model):

    """store Minigame Game Data for elevator game"""

    is_complete = models.BooleanField()

    question_one = models.CharField(
        "The first answer of the Research game",
        max_length=144
    )

    question_two = models.CharField(
        "The second answer of the Research game",
        max_length=144
    )

    question_three = models.CharField(
        "The third answer of the Research game",
        max_length=144
    )

    question_four = models.CharField(
        "The fourth answer of the Research game",
        max_length=144
    )

    question_five = models.CharField(
        "The fifth answer of the Research game",
        max_length=144
    )

    question_six = models.CharField(
        "The sixth answer of the Research game",
        max_length=144
    )

    class Meta:
        app_label = 'gateway'
