### Stage 1 ###
FROM node:16-alpine as ts-build
WORKDIR /app
COPY . .
# RUN yarn test
# RUN yarn clean

# COPY node_modules/suicide ./node_modules/suicide
RUN ls
RUN cd node_modules && ls && cd ../
# RUN yarn install
RUN yarn build

### Stage 2 ###
FROM node:16-alpine AS node-prod
WORKDIR /app
COPY --from=ts-build ./app/build ./build
COPY package.json ./
COPY yarn.lock ./
COPY ./node_modules/suicide ./node_modules/suicide
RUN yarn install --production
USER 1000
# ENV PORT=8080
# EXPOSE 8080
CMD yarn start