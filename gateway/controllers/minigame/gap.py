"""
gap minigame.

assists users in shopping at on of Americas most undervalued retailers
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.Gap import Gap_Form
from gateway.models.venture import Venture
from django.db import transaction


def gap_view(request):
    """render aha minigame."""
    form = Gap_Form
    minigame = {
        "title": "Gap- Minigame",
        "subtitle": "Coming Soon!",
        "is_gap": "active"
    }

    return render(
        request,
        'minigame/elevator.html',
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
            form = Gap_Form(request.POST)
            if form.is_valid():
                gap = form.save()
                venture.gap = gap
                venture.save()
