FROM alpine:3.7

RUN apk add g++ linux-headers make curl bash python

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

ARG DIR=/not-gwent-online
ENV BIND=127.0.0.1
ARG WEBSERVER_PORT=2000
ARG WEBSOCKET_PORT=2001

EXPOSE ${WEBSERVER_PORT} ${WEBSOCKET_PORT}

WORKDIR ${DIR}
RUN git clone https://github.com/LeonardJouve/not-gwent-online.git ${DIR} \
    && . $NVM_DIR/nvm.sh \    
    && npm install \
    && npm run build

RUN sed -i "s/3000/${WEBSERVER_PORT}/" public/Config.js \
    && sed -i "s/16918/${WEBSOCKET_PORT}/" public/Config.js

ENTRYPOINT ["/bin/bash", "-c", "git pull origin main && sed -i \"s/127.0.0.1/${BIND}/\" public/Config.js && . $NVM_DIR/nvm.sh && npm install && npm run build && npm run start"]