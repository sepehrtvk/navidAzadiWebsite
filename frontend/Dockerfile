FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .
COPY public /usr/src/app/public

# Set appropriate permissions
RUN chown -R node:node /usr/src/app/public

EXPOSE 3000

CMD [ "yarn", "dev" ]