FROM alpine:3.12

RUN apk add g++ linux-headers make curl bash python2

ENV NVM_DIR="/root/.nvm"
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 4.6.0 \
    && nvm use 4.6.0

RUN apk add git libjpeg-turbo-dev libpng-dev xz

ARG GRAPHICSMAGICK_VER=1.3.45
RUN curl -L http://downloads.sourceforge.net/graphicsmagick/graphicsmagick/$GRAPHICSMAGICK_VER/GraphicsMagick-$GRAPHICSMAGICK_VER.tar.xz | xz -d | tar -xvf - \
    && cd GraphicsMagick-$GRAPHICSMAGICK_VER \
    && ./configure \
    && make \
    && make install

ENTRYPOINT ["/bin/bash", "-c", ". $NVM_DIR/nvm.sh && npm install && npm run build && npm run start"]