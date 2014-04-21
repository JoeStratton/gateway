"""
Tests that pages load correctly when user is logged in.

Creates a headless browser to load the page
creates a test user and logs test user in
then attempts to load pages
"""
import unittest
from django.contrib.auth.models import User
from gateway.models.venture import Venture
from django.test import Client


class TestUrlsWork(unittest.TestCase):

    """."""

    def setUp(self):
        """
        log test user in.

        creates a test user
        creates a headless browser
        logs the headless browser in as test user
        """
        self.user = User.objects.create_user(
            'test',
            'test@email.com',
            'test'
        )

        self.client = Client()

        self.client.post(
            '/accounts/login/',
            {
                'username': 'test',
                'password': 'test'
            }
        )

    def tearDown(self):
        """delete user after tests."""
        self.user.delete()

    def test_home(self):
        """ensure member home page loads."""
        v = Venture(
            title="Murphee's Irish Coats",
            image="coat",
            progress=90,
            step="1",
            hook="Bringing the comfort and quality of Traditional\
                Irish coats to an Online International Exchange"
        )
        v.save()
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_community(self):
        """ensure community page loads."""
        response = self.client.get('/community')
        self.assertEqual(response.status_code, 200)

    def test_faqs(self):
        """
        ensure FAQ page loads.

        FAQs should load without login
        just testing to make sure it still works
        with login
        """
        response = self.client.get('/faqs')
        self.assertEqual(response.status_code, 200)

    def test_profile(self):
        """ensure profile page loads."""
        response = self.client.get('/profile')
        self.assertEqual(response.status_code, 200)

    def test_options(self):
        """ensure next options page loads."""
        response = self.client.get('/options')
        self.assertEqual(response.status_code, 200)
