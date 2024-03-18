FROM node

WORKDIR /app

COPY package.json .

RUN npm install

# Ensure the uploads directory exists
RUN mkdir -p ./uploads

COPY . .
EXPOSE 5500

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret

CMD ["npm", "start"]