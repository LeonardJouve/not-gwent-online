# Not-Gwent-Online

# Introduction
Not-Gwent-Online is a standalone multiplayer version of Gwent, a card game from The Witcher 3. 

## Installation
```bash
git clone https://github.com/LeonardJouve/not-gwent-online.git
cd not-gwent-online
docker build -t not-gwent .
```

## Start Server
`docker run --rm -e BIND=<server-ip> -p <webserver-port>:2000 -p <websocket-port>:2001 not-gwent`

## - Start Client
- Open your browser and go to e.g. "http://<server-ip>:<webserver-port>"
