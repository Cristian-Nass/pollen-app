FROM node:14-alpine

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g live-server

EXPOSE 80

WORKDIR /frontend/build

CMD ["live-server", "--port=80"]
