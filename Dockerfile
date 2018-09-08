FROM node:8.9.4-alpine

RUN apk add  --update && \
    apk  add --upgrade && \
    apk add -y git
RUN npm install sequelize-cli -g
RUN npm install gulp -g
RUN npm install gulp-cli -g
RUN npm install bower -g


RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install

COPY bower.json /app/
RUN bower install --allow-root

# Bundle app source
COPY . /app
RUN gulp build-inject
# Expose the port the app runs in
EXPOSE 3000

CMD npm start