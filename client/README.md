README for Message App

# Setup Docker
Build the docker container: 'docker-compose up --build --no-recreate -d'
On any subsequent builds, run 'docker-compose up -d' instead

# Enter the Container
Run 'docker exec -it vite_docker sh'

# Start the app
Once inside the docker container, run the following: 'npm i && npm run dev'