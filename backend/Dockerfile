FROM node:latest

WORKDIR /app

RUN apt -y update && apt -y upgrade

RUN npm install -g npm@11.1.0

COPY . .

RUN npm install

CMD ["node", "index.js"]