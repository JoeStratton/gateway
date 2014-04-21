"""
URLs for project.

URLS connect the URI to the controller.
"""
from django.conf import settings
from django.conf.urls import patterns, url, include
from django.conf.urls.static import static
from gateway.controllers import minigame, options
import gateway.controllers
from django.contrib import admin
from django.views.generic import RedirectView
admin.autodiscover()

# pattherns for the minigame pages
minigame_patterns = patterns(
    '',
    (r'^$', RedirectView.as_view(url='/minigame/start')),
    (r'^start?$', gateway.controllers.minigame.start_view),
    (r'^aha?$', gateway.controllers.minigame.aha_view),
    (r'^gap?$', gateway.controllers.minigame.gap_view),
    (r'^survey?$', gateway.controllers.minigame.survey_view),
    (r'^interest?$', gateway.controllers.minigame.interest_view),
    (r'^elevator?$', gateway.controllers.minigame.elevator_view),
    (r'^end?$', gateway.controllers.minigame.end_view),
)

# patterns for all pages off of root ("/")
urlpatterns = patterns(
    '',
    (r'^/?$', gateway.controllers.home_view),
    (r'^admin/', include(admin.site.urls)),
    (r'^accounts/', include('registration.backends.default.urls')),
    (r'^community/?$', gateway.controllers.community_view),
    (r'^profile/?$', gateway.controllers.profile_view),
    (r'^faqs/?$', gateway.controllers.faqs_view),
    (r'^ventures/(?P<id>\d{1})/$', gateway.controllers.venture_view),
    (r'^minigame/', include(minigame_patterns)),
    (r'^options/?$', gateway.controllers.options_view),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
