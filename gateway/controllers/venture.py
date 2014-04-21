"""venture displays a single venture."""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.venture import Venture


def venture_view(request, id="1"):
    """get a specific venture and render."""
    ventures = Venture.objects.all()
    return render(
        request,
        'venture.html',
        dict(
            venture=Venture.objects.get(id=int(id))
        )
    )
