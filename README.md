# Not-Gwent-Online

# Introduction
Not-Gwent-Online is a standalone multiplayer version of Gwent, a card game from The Witcher 3. 

## Installation
```bash
git clone https://github.com/LeonardJouve/not-gwent-online.git
cd gwent
cp .env.example .env
```

Edit .env with the websocket IP address (must be different from the server IP address)

## Start Server
`docker compose up -d --build`

## Stop Server
`docker compose down`

## Start Client
Open your browser and go to `http://<server-ip>:<webserver-port>`

## Todo List
- Deck Maker
- Improve UI to better reflect selected faction
- Missing abilities
    - Mardroeme Cards
    - Leader Cards:
        - Francesca Findabair: Hope of the Aen Seidhe
        - Eredin: Destroyer of Worlds
        - Eredin: King of The Wild Hunt
        - Emhyr var Emreis: Emperor of Nilfgaard
        - Emhyr var Emreis: Invader of the North
        - King Bran

## Known Issues
- Transformed Young Vildkaarls' Tight Bond ability doesn't grant the expected amount of points