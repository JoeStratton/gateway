"""
elevator minigame.

walks the user through creating an elevator speech
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.Elevator import Elevator, Elevator_Form
from gateway.models.venture import Venture
from django.db import transaction


def elevator_view(request):
    """render elevator_view(request) minigame."""
    form = Elevator_Form
    minigame = {
        "title": "Elevator- Minigame",
        "subtitle": "Coming Soon!",
        "is_elevator": "active"
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
            form = Elevator_Form(request.POST)
            if form.is_valid():
                elevator = form.save()
                venture.elevator = elevator
                venture.save()
