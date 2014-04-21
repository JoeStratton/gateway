"""
end of the minigames.

and closing statements for the user before next steps
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def end_view(request):
    """render end view."""
    minigame = {
        "title": "End - The Final Minigame",
        "subtitle": "Coming Soon!",
        "is_end": "active"
    }

    return render(
        request,
        'minigame/end.html',
        dict(minigame=minigame)
    )
