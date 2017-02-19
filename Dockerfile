FROM node:4.7.3-alpine

RUN apk update && \
    apk upgrade && \
    apk add git tini

RUN npm install -g npm@3
RUN npm install jspm@beta -g

WORKDIR /src/
ENV PATH=/src/node_modules/.bin:$PATH

ENTRYPOINT ["/sbin/tini", "-g", "--"]

EXPOSE 80
