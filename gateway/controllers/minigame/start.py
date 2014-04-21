"""
start.

introduces the user to the gateway process
and dash the "adorable" floating robot thing
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def start_view(request):
    """render starting minigame."""
    minigame = {
        "title": "Start",
        "subtitle": "Coming Soon!",
        "is_start": "active"
    }

    return render(
        request,
        'minigame/start.html',
        dict(minigame=minigame)
    )
