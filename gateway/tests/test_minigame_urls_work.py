"""
Tests the minigame pages are loading.

Creates a headless browser to load the page
and test for a http 200 (Okay) status code
"""
import unittest
from django.test import Client


class TestMinigameUrlsWork(unittest.TestCase):

    """Tests for minigames."""

    def setUp(self):
        """create a headless browser."""
        self.client = Client()

    def test_minigame_home(self):
        """ensure direct access to minigames results in redirect."""
        response = self.client.get('/minigame')
        # http 301 is a Permanent Redirect.
        self.assertEqual(response.status_code, 301)

    def test_minigame_start(self):
        """ensure start page loads."""
        response = self.client.get('/minigame/start')
        self.assertEqual(response.status_code, 200)

    def test_minigame_aha(self):
        """ensure aha minigame loads."""
        response = self.client.get('/minigame/aha')
        self.assertEqual(response.status_code, 200)

    def test_minigame_elevator(self):
        """ensure elevator pitch minigame loads."""
        response = self.client.get('/minigame/elevator')
        self.assertEqual(response.status_code, 200)

    def test_minigame_end(self):
        """ensure the end screen for minigames loads."""
        response = self.client.get('/minigame/end')
        self.assertEqual(response.status_code, 200)

    def test_minigame_gap(self):
        """ensure that the gap minigame loads."""
        response = self.client.get('/minigame/gap')
        self.assertEqual(response.status_code, 200)

    def test_minigame_interest(self):
        """ensure the interest minigame loads."""
        response = self.client.get('/minigame/interest')
        self.assertEqual(response.status_code, 200)

    def test_minigame_survey(self):
        """ensure the survey minigame loads."""
        response = self.client.get('/minigame/survey')
        self.assertEqual(response.status_code, 200)
