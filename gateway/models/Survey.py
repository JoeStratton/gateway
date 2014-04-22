"""survey minigame model information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms


class Survey(models.Model):

    """store Minigame Game Data for survey game"""

    is_complete = models.BooleanField()

    question_one = models.CharField(
        "The first answer of the Elevator game",
        max_length=144
    )

    question_two = models.CharField(
        "The second answer of the Elevator game",
        max_length=144
    )

    question_three = models.CharField(
        "The third answer of the Elevator game",
        max_length=144
    )

    question_four = models.CharField(
        "The fourth answer of the Elevator game",
        max_length=144
    )

    question_five = models.CharField(
        "The fifth answer of the Elevator game",
        max_length=144
    )

    question_six = models.CharField(
        "The sixth answer of the Elevator game",
        max_length=144
    )

    class Meta:
        app_label = 'gateway'


class Survey_Form(forms.ModelForm):

    class Meta:
        model = Survey
        fields = '__all__'
