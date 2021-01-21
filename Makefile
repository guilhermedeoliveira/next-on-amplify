include .env
SHELL := /bin/bash # Use bash syntax

amplify-init:
	yarn amplify pull --appId $(AMPLIFY_APP_ID) --envName $(ENV)

amplify-pull:
	yarn amplify pull
