"""This would hold any admin settings."""
from django.contrib import admin
from gateway.models import *

admin.site.register(Venture)
