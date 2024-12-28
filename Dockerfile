FROM node:10-alpine

RUN apk add bash curl git graphicsmagick g++ libjpeg-turbo-dev libpng-dev linux-headers make python3 xz 

ENTRYPOINT ["/bin/bash", "-c", "npm install && npm run build && npm start"]