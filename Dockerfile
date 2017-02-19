FROM node:4.7.3-alpine

RUN apk update && \
    apk upgrade && \
    apk add git

RUN npm install -g npm@3
RUN npm install jspm@beta -g

WORKDIR /src/
ENV PATH=/src/node_modules/.bin:$PATH

ADD https://github.com/krallin/tini/releases/download/v0.9.0/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/sbin/tini", "-g", "--"]


EXPOSE 80
