FROM node:10.12.0-alpine

RUN apk add g++ linux-headers make curl bash python2

RUN apk add git libjpeg-turbo-dev libpng-dev xz

ARG GRAPHICSMAGICK_VER=1.3.45
RUN curl -L http://downloads.sourceforge.net/graphicsmagick/graphicsmagick/$GRAPHICSMAGICK_VER/GraphicsMagick-$GRAPHICSMAGICK_VER.tar.xz | xz -d | tar -xvf - \
    && cd GraphicsMagick-$GRAPHICSMAGICK_VER \
    && ./configure \
    && make \
    && make install

ENTRYPOINT ["/bin/bash", "-c", "npm install && npm run build && npm run start"]