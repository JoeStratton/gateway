"""
options view.

This view currently has not links from other pages.
This will likely be move into the minigames section
to go in or after the end minigames
"""
from django.shortcuts import render


def options_view(request):
    """load option view."""
    return render(request, 'options.html')
