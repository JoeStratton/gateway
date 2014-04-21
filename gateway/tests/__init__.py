"""manage test imports."""
import unittest


def suite():
    """collect and run all tests for gateway."""
    return unittest.TestLoader().discover("gateway.tests", pattern="*.py")
