FROM node:8.7.0-alpine

RUN mkdir -p /app/ipact-client
WORKDIR /app/ipact-client

COPY package.json /app/ipact-client
#COPY yarn.lock /app/ipact-client

#RUN npm install yarn -g

RUN npm install

COPY . /app/ipact-client

CMD ["npm", "start"]