"""
interest minigame.

walks the user through how to drum up interest in product
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def interest_view(request):
    """render interest minigame."""
    minigame = {
        "title": "Interest - Minigame 4",
        "subtitle": "Coming Soon!",
        "is_interest": "active"
    }

    return render(
        request,
        'minigame/interest.html',
        dict(minigame=minigame)
    )
