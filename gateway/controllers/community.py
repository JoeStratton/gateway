"""
Loads the community view.

this has been deperated in current version of code and may be removed in future
versions
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def community_view(request):
    """pull information to display into view."""
    myVenture = {
        "title": "My Ventures",
        "content": "Start a new venture today!"
    }

    groupVenture = {
        "title": "My Groups's Ventures",
        "content": "You do not yet have any groups. \
                Start a venture to become part of a group."
    }

    communityVenture = {
        "title": "Community Ventures",
        "content": "John Smith just published his first survey! \
            Gateway helped Planet Express start their own business. \
            Read the story and see how their company is doing now. \
            You too, could be running your own business someday!"
    }

    return render(
        request,
        'community.html',
        dict(
            myVenture=myVenture,
            groupVenture=groupVenture,
            communityVenture=communityVenture
        )
    )
