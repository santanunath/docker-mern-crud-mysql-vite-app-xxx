FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY ./ ./
#CMD ["npm", "run", "dev"]  #it is defined in docker-compose.yml
