"""Loads Frequently asked question page."""
from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def faqs_view(request):
    """pull information for the FAQs page."""
    return render(
        request,
        'faqs.html',
        # dict(faq=faq)
    )
