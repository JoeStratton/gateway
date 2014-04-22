"""
interest minigame.

walks the user through how to drum up interest in product
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.Interest import Interest_Form
from gateway.models.venture import Venture
from django.db import transaction


def interest_view(request):
    """render interest minigame."""
    form = Interest_Form
    minigame = {
        "title": "Interest- Minigame",
        "subtitle": "Coming Soon!",
        "is_interest": "active"
    }

    return render(
        request,
        'minigame/interest.html',
        dict(minigame=minigame)
    )
    """contains temp data for venture currently"""
    with transaction.atomic():
        venture = Venture(
            title="Murphee's Irish Coats",
            image="coat",
            progress=90,
            step="1",
            hook="Bringing the comfort and quality of Traditional Irish coats\
             to an Online International Exchange"
        )
        if request.method == 'POST':
            form = Interest_Form(request.POST)
            if form.is_valid():
                interest = form.save()
                venture.interest = interest
                venture.save()
