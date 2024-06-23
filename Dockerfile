FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -la /usr/src/app/src

EXPOSE 3000

CMD ["node", "src/index.js"]
