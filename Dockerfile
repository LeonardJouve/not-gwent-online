FROM alpine:3.7

RUN apk add --no-cache curl make gcc g++ python linux-headers paxctl libgcc libstdc++ gnupg git bash lzip wget ffmpeg libjpeg-turbo-dev libpng-dev libtool libgomp \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

ENV NVM_DIR="/root/.nvm"
RUN . "$NVM_DIR/nvm.sh" \
    && nvm install 4.6.0 \
    && nvm use 4.6.0

ENV GRAPHICSMAGICK_VER=1.3.30
RUN wget http://downloads.sourceforge.net/graphicsmagick/graphicsmagick/$GRAPHICSMAGICK_VER/GraphicsMagick-$GRAPHICSMAGICK_VER.tar.lz \
    && lzip -d -c GraphicsMagick-$GRAPHICSMAGICK_VER.tar.lz | tar -xvf - \
    && cd GraphicsMagick-$GRAPHICSMAGICK_VER \
    && ./configure --prefix=/usr --enable-shared --disable-static --with-threads \
    && make \
    && make install

ARG DIR=/not-gwent-online
ENV BIND=127.0.0.1
ARG WEBSERVER_PORT=2000
ARG WEBSOCKET_PORT=2001
    
WORKDIR ${DIR}
RUN git clone https://github.com/LeonardJouve/not-gwent-online.git ${DIR} \
    && . $NVM_DIR/nvm.sh \    
    && npm install \
    && npm run build

EXPOSE ${WEBSERVER_PORT} ${WEBSOCKET_PORT}

RUN sed -i "s/3000/${WEBSERVER_PORT}/" public/Config.js \
    && sed -i "s/16918/${WEBSOCKET_PORT}/" public/Config.js

ENTRYPOINT ["/bin/bash", "-c", "git pull origin main && sed -i \"s/127.0.0.1/${BIND}/\" public/Config.js && . $NVM_DIR/nvm.sh && npm install && npm run build && node server/server.js"]
CMD []