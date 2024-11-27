README for Message App

# Build images
Go into client directory, run 'docker build -t client .'
Go into server directory, run 'docker build -t server .'

# Build network
If it's never been created, run 'docker network create message-app'.

# Build Docker
docker compose up -d --build

# Backend
Dependancies: express, nodemon