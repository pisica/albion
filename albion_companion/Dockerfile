FROM node:trixie AS builder

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 5001

CMD ["npm", "run", "start"]

