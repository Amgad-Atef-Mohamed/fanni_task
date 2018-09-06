FROM node:8.9.4-alpine

RUN apk add install git
RUN npm install sequelize-cli -g
RUN npm install gulp -g
RUN npm install bower -g


RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

# Bundle app source
COPY . /app

# Expose the port the app runs in
EXPOSE 3000

CMD bower install --allow-root --verbose --force && gulp build-inject && sequelize db:migrate:undo:all && sequelize db:migrate && sequelize db:seed:all && npm start