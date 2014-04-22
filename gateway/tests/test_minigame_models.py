from django.test import TestCase
from gateway.models.venture import Venture
from gateway.tests.sample import aha, survey, elevator, interest, gap
"""Testing that data was stored in the minigame models"""
"""Only tests if data is stored in db and accsessable"""
"""other functions are tested by the framework"""


class MinigameTestCase(TestCase):
    def setUp(self):
        venture = Venture(
            title="Please Work",
            image="None",
            progress=0,
            step="0",
            hook="captain",
            aha=aha,
            survey=survey,
            elevator=elevator,
            gap=gap,
            interest=interest
        )
        venture.save()

    def test_Foreign_Key(self):
        entry = Venture.objects.get(title="Please Work")
        self.assertEqual(entry.title, "Please Work")
        self.assertEqual(entry, Venture.objects.get(title="please Work"))

    def test_minigame_Aha(self):
        self.assertEqual(aha.is_complete, False)
        self.assertEqual(aha.question_one, 0)
        self.assertEqual(aha.question_two, 0)
        self.assertEqual(aha.question_three, 0)
        self.assertEqual(aha.question_four, 0)
        self.assertEqual(aha.question_five, 0)
        self.assertEqual(aha.question_six, 0)

    def test_minigame_Elevator(self):
        self.assertEqual(elevator.question_one, 0)
        self.assertEqual(elevator.question_two, 0)
        self.assertEqual(elevator.question_three, 0)
        self.assertEqual(elevator.question_four, 0)
        self.assertEqual(elevator.question_five, 0)

    def test_minigame_Interest(self):
        self.assertEqual(interest.question_one, 0)
        self.assertEqual(interest.question_two, 0)
        self.assertEqual(interest.question_three, 0)
        self.assertEqual(interest.question_four, 0)
        self.assertEqual(interest.question_five, 0)
        self.assertEqual(interest.question_six, 0)

    def test_minigame_Gap(self):
        self.assertEqual(gap.question_one, 0)
        self.assertEqual(gap.question_two, 0)
        self.assertEqual(gap.question_three, 0)
        self.assertEqual(gap.question_four, 0)
        self.assertEqual(gap.question_five, 0)
        self.assertEqual(gap.question_six, 0)

    def test_minigame_Survey(self):
        self.assertEqual(survey.question_one, 0)
        self.assertEqual(survey.question_two, 0)
        self.assertEqual(survey.question_three, 0)
        self.assertEqual(survey.question_four, 0)
        self.assertEqual(survey.question_five, 0)
        self.assertEqual(survey.question_six, 0)
