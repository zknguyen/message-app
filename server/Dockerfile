# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app/server

# Install the application
COPY package.json .
RUN npm install

# Copy in the source code
COPY . .
EXPOSE 3000

CMD ["npm", "run", "start"]