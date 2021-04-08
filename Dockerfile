FROM node:15-alpine as build

WORKDIR /app

COPY . .

RUN apk add --no-cache --virtual .gyp python make g++ && \
    npm install && \
    npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html
ADD docker/nginx/default.conf /etc/nginx/conf.d/default.conf
