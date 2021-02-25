FROM node:lts-alpine

RUN apk add --no-cache bash

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY package*.json ./
COPY --chown=node:node . /usr/src/app
COPY . /usr/src/app

RUN npm ci --only=production
USER node

RUN ls -d $PWD/*
RUN echo $PWD

CMD [ "npm", "run", "start:prod" ]

