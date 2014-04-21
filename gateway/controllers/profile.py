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
from django import forms
from gateway.models.profile import UserProfile


class BioForm(forms.Form):

    bio = forms.CharField(
        max_length=140
    )

    interests = forms.CharField(
        max_length=140
    )

    goals = forms.CharField(
        max_length=140
    )

    school = forms.CharField(
        max_length=140
    )

    major = forms.CharField(
        max_length=140
    )

    degree = forms.CharField(
        max_length=140
    )

    edudesc = forms.CharField(
        max_length=140
    )

    company = forms.CharField(
        max_length=140
    )

    comtitle = forms.CharField(
        max_length=140
    )

    workdesc = forms.CharField(
        max_length=140
    )

    class Meta:
        model = UserProfile


@login_required
def profile_view(request):
    """populate profile information."""
    bio = 'fjsdkljflsdjflsdjfkljsdklfjsdlkfjsdkljfklsdjfkljsdklfjslkdfj'
    if request.method == 'POST':
        form = BioForm(request.POST)
        if form.is_valid():
            bio = form.cleaned_data['bio']
            user = request.user.id
            print bio

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
            "title": "Bio",
            "input": True

        },
        {
            "id": "interests",
            "title": "Interests",
            "content": "test help"
        },
        {
            "id": "goals",
            "title": "Goals",
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

    form = BioForm()

    return render(
        request,
        'student.html',
        dict(
            subnav=subnav,
            modal=modal,
            prof=prof,
            form=form,
            bio=bio
        )
    )
