"""Aha minigame information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms

"""model for the Aha minigame"""


class Aha(models.Model):

    is_complete = models.BooleanField(
        "The model Completion status of the Aha game"
    )

    question_one = models.IntegerField(
        "The first question of the Aha game"
    )

    question_two = models.IntegerField(
        "The second question of the Aha game"
    )

    question_three = models.IntegerField(
        "The third question of the Aha game"
    )

    question_four = models.IntegerField(
        "The fourth question of the Aha game"
    )

    question_five = models.IntegerField(
        "the fifth question of the Aha game"
    )

    question_six = models.IntegerField(
        "the sixth question of the Aha game"
    )

    class Meta:
        app_label = 'gateway'


class Aha_Form(forms.ModelForm):

    class Meta:
        model = Aha
        fields = '__all__'
