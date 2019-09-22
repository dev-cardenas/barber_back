FROM node:12

WORKDIR /usr/src

COPY ./package.json .

RUN yarn

COPY . .

EXPOSE 5000

CMD yarn dev
