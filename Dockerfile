FROM node:4.4.3-slim
RUN apt-get update && apt-get install -y git
RUN npm install jspm@beta -g

WORKDIR /src/
ENV PATH=/src/node_modules/.bin:$PATH


EXPOSE 80
