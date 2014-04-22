"""
aha minigame.

introduces user to the game
and assists choosing an idea for a venture
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.Aha import Aha, Aha_Form
from gateway.models.venture import Venture
from django.db import transaction


def aha_view(request):
    """render aha minigame."""
    form = Aha_Form

    return render(
        request,
        'minigame/aha.html'
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
            form = Aha_Form(request.POST)
            if form.is_valid():
                aha = form.save()
                venture.aha = aha
                venture.save()
