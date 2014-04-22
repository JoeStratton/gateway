"""Start minigame information."""
"""Will change based on number of questions"""
from django.db import models
from django import forms


class Interest(models.Model):

    """store Minigame Game Data for Interest game"""

    is_complete = models.BooleanField(
        "The model Completion status of the Interest game"
    )

    question_one = models.IntegerField(
        "The first question of the Interest game"
    )

    question_two = models.IntegerField(
        "The second question of teh Interest game"
    )

    question_three = models.IntegerField(
        "The third question of the Interest game"
    )

    question_four = models.IntegerField(
        "The fourth question of the Interest game"
    )

    question_five = models.IntegerField(
        "the fifth question of the Interest game"
    )

    question_six = models.IntegerField(
        "the sixth question of the Interest game"
    )

    class Meta:
        app_label = 'gateway'


class Interest_Form(forms.ModelForm):

    class Meta:
        model = Interest
        fields = '__all__'
