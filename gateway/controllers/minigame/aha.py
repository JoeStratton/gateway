"""
aha minigame.

introduces user to the game
and assists choosing an idea for a venture
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def aha_view(request):
    """render aha minigame."""
    minigame = {
        "title": "Aha!- Minigame 1",
        "subtitle": "Coming Soon!",
        "is_aha": "active"
    }

    return render(
        request,
        'minigame/aha.html',
        dict(minigame=minigame)
    )
