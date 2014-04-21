"""
survey minigame.

this minigame shows user how to survey potential customers
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def survey_view(request):
    """render survey minigame."""
    minigame = {
        "title": "Survey - Game 3",
        "subtitle": "Coming Soon!",
        "is_survey": "active"
    }

    return render(
        request,
        'minigame/survey.html',
        dict(minigame=minigame)
    )
