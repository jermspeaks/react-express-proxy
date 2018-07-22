FROM node:9

WORKDIR /app

RUN mkdir -p /app
COPY . /app

RUN npm install
# RUN npm run test
RUN npm run build

EXPOSE 8080

CMD ["node", "server.js"]
# CMD ["npm", "start:prod"]