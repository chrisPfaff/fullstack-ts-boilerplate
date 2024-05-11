FROM node:21

WORKDIR /server

COPY server/package*.json server/yarn.lock ./
RUN yarn install
# Install dependencies
COPY server/ .

WORKDIR /client

COPY client/frontend/package*.json client/frontend/yarn.lock ./
RUN yarn install
RUN yarn build
COPY client/ .

WORKDIR /server
ENV port=3001
EXPOSE 3001
CMD ["yarn", "dev"]



