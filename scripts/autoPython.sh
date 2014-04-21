#!/bin/bash
#a script for automatically runing autopep8

echo "Please wait while we run autopep8"

autopep8 --in-place --aggressive $1
