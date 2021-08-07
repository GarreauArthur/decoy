FROM node:14-alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY package.json ./
COPY yarn.lock ./
RUN yarn --prod

COPY ./dist/ ./
RUN ls

CMD ["node", "dist/index.js"]