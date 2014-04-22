"""minigame model information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms


class Elevator(models.Model):

    """store Minigame Game Data for elevator game"""

    is_complete = models.BooleanField(
        "The model Completion status of the Elevator game"
    )

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


class Elevator_Form(forms.ModelForm):

    class Meta:
        model = Elevator
        fields = '__all__'
