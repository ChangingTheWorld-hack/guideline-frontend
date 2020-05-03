FROM node:12-alpine as dev

WORKDIR /var/www/frontend
COPY . /var/www/frontend
RUN yarn install && yarn build

EXPOSE 3000

CMD ["yarn", "dev"]