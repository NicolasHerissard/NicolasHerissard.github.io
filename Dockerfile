FROM node:lts-alpine

WORKDIR /usr/src/app

COPY .  .

RUN npm install

COPY ./src /usr/src/app/

EXPOSE 4321

CMD npm start