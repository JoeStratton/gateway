"""
gap minigame.

assists users in shopping at on of Americas most undervalued retailers
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def gap_view(request):
    """render gap minigame."""
    minigame = {
        "title": "Gap - Minigame 2",
        "subtitle": "Coming Soon!",
        "is_gap": "active"
    }

    return render(
        request,
        'minigame/gap.html',
        dict(minigame=minigame)
    )
