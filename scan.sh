#!/bin/bash

sudo $(PIPENV_IGNORE_VIRTUALENVS=1 pipenv --venv)/bin/python3 arp-scan.py