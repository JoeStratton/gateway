"""
This controlls the home view.

handles two seperate views to members and non members
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from gateway.models.venture import Venture


def home_view(request):
    """seperate members and non members."""
    if request.user.is_authenticated():
        ventures = Venture.objects.all()

        return render(
            request,
            'members.html',
            dict(
                ventures=ventures[1:],
                currentVenture=ventures[0]
            )
        )
    else:
        return render(request, 'home.html')
