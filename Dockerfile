FROM node:latest

COPY package.json package-lock.json ./tmp/

RUN cd /tmp && npm install

RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app

COPY . .

CMD [ "npm", "test" ]
