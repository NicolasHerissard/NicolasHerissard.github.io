FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install -g npm@latest

RUN npm install -g astro

RUN npm install

COPY . /usr/src/app/

COPY ./src /usr/src/app/src

COPY ./public /usr/src/app/public

COPY ./.astro /usr/src/app/.astro

EXPOSE 4321

CMD ["npm", "run", "start"]