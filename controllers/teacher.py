from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def teacher_view(request):
    subnav = [
        {
            "id": "tabi-profile",
            "title": "Profile",
            "icon": "glyphicon-user",
            "content": "test profile",
            "active": "active"
        },
        {
            "id": "tabi-manage",
            "title": "Manage",
            "icon": "glyphicon-tasks",
            "content": "test manage"
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
            "id": "tabi-help",
            "title": "Help",
            "icon": "glyphicon-question-sign",
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

    activities = [
        {
            "name": "Brandon Sleater",
            "game": "Elevator",
            "time": "8 minutes"
        },
        {
            "name": "Joseph Stratton",
            "game": "Research",
            "time": "43 minutes"
        },
        {
            "name": "Christian Murphy",
            "game": "Interest",
            "time": "2 hours"
        },
        {
            "name": "Becca Little",
            "game": "Survey",
            "time": "11 hours"
        },
        {
            "name": "Davis Kendry",
            "game": "Gap",
            "time": "1 day, 2 hours"
        }
    ]

    act_pgs = [
        {
            "id": "rec_std_act_1",
            "active": "active"
        },
        {
            "id": "rec_std_act_2"
        },
        {
            "id": "rec_std_act_3"
        }
    ]

    return render(
        request,
        'teacher.html',
        dict(
            subnav=subnav,
            modal=modal,
            activities=activities,
            act_pgs=act_pgs
        )
    )