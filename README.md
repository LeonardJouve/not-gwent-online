# Not-Gwent-Online

# Introduction
Not-Gwent-Online is a standalone multiplayer version of Gwent, a card game from The Witcher 3. 

## Installation
```bash
git clone https://github.com/LeonardJouve/not-gwent-online.git
cd not-gwent-online
cp .env.example .env
```

Edit .env

## Start Server
`docker compose up -d --build`

## Stop Server
`docker compose down`

## Start Client
Open your browser and go to `http://<server-ip>:<webserver-port>`
