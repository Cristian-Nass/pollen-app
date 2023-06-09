FROM node:14-alpine

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 3002

CMD ["node", "server.js"]
