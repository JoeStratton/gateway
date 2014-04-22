from gateway.models.Aha import Aha
from gateway.models.Elevator import Elevator
from gateway.models.Interest import Interest
from gateway.models.Gap import Gap
from gateway.models.Survey import Survey
"""storing test data for the test_minigame_models
      tests in objects of relevant models"""


aha = Aha.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
elevator = Elevator.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
survey = Survey.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
interest = Interest.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
gap = Gap.objects.create(
    is_complete=False,
    question_one=0,
    question_two=0,
    question_three=0,
    question_four=0,
    question_five=0,
    question_six=0
)
