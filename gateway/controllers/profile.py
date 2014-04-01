"""
User profile page.

currently has both a student and teacher view
student is the only used at the moment
the status of teacher profile is up in the air
more likely it will be removed
"""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from controllers.profile import Profile


@login_required
def profile_view(request):
    """populate profile information."""
    subnav = [
        {
            "id": "tabi-profile",
            "title": "Profile",
            "icon": "glyphicon-user",
            "content": "test profile",
            "active": "active"
        },
        {
            "id": "tabi-progress",
            "title": "Progress",
            "icon": "glyphicon-tasks",
            "content": "test progress"
        },
        {
            "id": "tabi-account",
            "title": "Account",
            "icon": "glyphicon-cloud",
            "content": "test account"
        },
        {
            "id": "tabi-settings",
            "title": "Settings",
            "icon": "glyphicon-cog",
            "content": "test settings"
        },
        {
            "id": "tabi-faq",
            "title": "FAQ",
            "icon": "glyphicon-list-alt",
            "content": "test faq"
        },
        {
            "id": "tabi-help",
            "title": "Help",
            "icon": "glyphicon-question-sign",
            "content": "test help"
        }
    ]

    prof = [
        {
            "id": "bio",
            "title": "Help",
            "content": "test help"
        },
        {
            "id": "interests",
            "title": "Help",
            "content": "test help"
        },
        {
            "id": "goals",
            "title": "Help",
            "content": "test help"
        }
    ]
    modal = [
        {
            "id": "modal-username",
            "title": "Change Username",
            "input": True,
            "inpid": "inp__username",
            "change": "username"
        },
        {
            "id": "modal-password",
            "title": "Change Password",
            "input": True,
            "inpid": "inp__password",
            "change": "password"
        },
        {
            "id": "modal-email",
            "title": "Change Email",
            "input": True,
            "inpid": "inp__email",
            "change": "email"
        }
    ]

    return render(
        request,
        'student.html',
        dict(
            subnav=subnav,
            modal=modal
            prof=prof
        )
    )
