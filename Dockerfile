FROM node:14

WORKDIR /proxy

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

