#!/bin/bash

#script to move fixed auth_urls

sudo cp auth_urls.txt /usr/local/lib/python2.7/dist-packages/registration/auth_urls.py 
echo done.
