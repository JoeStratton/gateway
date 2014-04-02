from django.test import TestCase
from gateway.models.venture import Venture
from gateway.tests.sample import aha, survey, elevator, feedback, research


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
            research=research,
            feedback=feedback
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

    def test_minigame_Feedback(self):
        self.assertEqual(feedback.question_one, 0)
        self.assertEqual(feedback.question_two, 0)
        self.assertEqual(feedback.question_three, 0)
        self.assertEqual(feedback.question_four, 0)
        self.assertEqual(feedback.question_five, 0)
        self.assertEqual(feedback.question_six, 0)

    def test_minigame_Research(self):
        self.assertEqual(research.question_one, 0)
        self.assertEqual(research.question_two, 0)
        self.assertEqual(research.question_three, 0)
        self.assertEqual(research.question_four, 0)
        self.assertEqual(research.question_five, 0)
        self.assertEqual(research.question_six, 0)

    def test_minigame_Survey(self):
        self.assertEqual(survey.question_one, 0)
        self.assertEqual(survey.question_two, 0)
        self.assertEqual(survey.question_three, 0)
        self.assertEqual(survey.question_four, 0)
        self.assertEqual(survey.question_five, 0)
        self.assertEqual(survey.question_six, 0)
