#FROM node

FROM ubuntu

RUN apt update && apt upgrade -y
RUN apt install nodejs -y && apt install npm -y && apt install gulp -y

RUN mkdir /gamejs
WORKDIR /gamejs

COPY . /gamejs
RUN npm install
EXPOSE 3000

CMD gulp watch
