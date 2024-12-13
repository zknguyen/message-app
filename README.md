README for Message App
## Docker
# Build images
Go into client directory, run 'docker build -t client .'
Go into server directory, run 'docker build -t server .'

# Build network
If it's never been created, run 'docker network create message-app'.

# Build Docker
docker compose up -d --build

# Backend
Dependancies: express, nodemon

## Auth0
# Set config values
Create a file called config.js in the client directory
In the config.js file, copy and paste the following:

const config = {
    AUTH0_PROVIDER_DOMAIN: {your_domain},
    AUTH0_PROVIDER_CLIENTID: {your_clientid}
}

export default config;

These can be grabbed from the Auth0 portal

# Congifure Auth0
Follow this link: https://auth0.com/docs/quickstart/spa/react/interactive
Follow all the steps until 'Add login to your application'