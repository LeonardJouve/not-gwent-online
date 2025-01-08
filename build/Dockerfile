FROM node:10-alpine

RUN apk add autoconf automake graphicsmagick g++ libpng-dev make

ENTRYPOINT ["sh", "-c", "npm install && npm run build"]