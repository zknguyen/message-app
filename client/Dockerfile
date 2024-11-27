# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app/client

# Install the application
COPY package.json .
RUN npm install

# Copy in the source code
COPY . .
RUN npm run build
EXPOSE 8000

CMD ["npm", "run", "dev"]