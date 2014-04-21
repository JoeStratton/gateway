"""
Tests that pages that require login redirect to login page.

Creates a headless browser to load the page
and test for a http 302 (Temporary Redirect) status code
or http 200 (Okay) for pages that do not require login
"""
import unittest
from django.test import Client


class TestRedirectssWork(unittest.TestCase):

    """Tests for basic pages and redirects."""

    def setUp(self):
        """create a headless browser."""
        self.client = Client()

    def test_home(self):
        """
        test home loads correctly.

        home page has a view for when users are not logged in
        """
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_faqs(self):
        """
        test the FAQs view.

        FAQs does not require login
        """
        response = self.client.get('/faqs')
        self.assertEqual(response.status_code, 200)

    def test_community(self):
        """test community page redirect."""
        response = self.client.get('/community', follow=True)

        self.assertEqual(
            response.redirect_chain,
            [('http://testserver/accounts/login/?next=/community', 302)]
        )

        self.assertEqual(response.status_code, 200)

    def test_profile(self):
        """test profile redirect."""
        response = self.client.get('/profile', follow=True)

        self.assertEqual(
            response.redirect_chain,
            [('http://testserver/accounts/login/?next=/profile', 302)]
        )

        self.assertEqual(response.status_code, 200)
