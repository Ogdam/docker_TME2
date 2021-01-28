FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

#Bundle app source
COPY . .

CMD [ "node", "index.js"]
