FROM node:latest

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "test" ]