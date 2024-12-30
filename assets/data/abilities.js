module.exports = {

  "agile": {
    name: "agile",
    description: "Agile: Can be placed in either the Close Combat or Ranged Combat row. Cannot be moved once placed.",
    cancelPlacement: true,
    onBeforePlace: function(card){
      var self = this;
      this.send("played:agile", {cardID: card.getID()}, true);
      this.on("agile:setField", function(type){
        self.off("agile:setField");
        card.changeType(type)
        self.placeCard(card, {
          disabled: true
        });
        self.hand.remove(card);
      })
    }
  },
  "medic": {
    name: "medic",
    description: "Medic: Choose one card from your discard pile (excluding heroes / special cards) to play instantly.",
    waitResponse: true,
    onAfterPlace: function(card){
      var discard = this.getDiscard();

      discard = this.filter(discard, {
        "ability": "hero",
        "type": [card.constructor.TYPE.SPECIAL, card.constructor.TYPE.WEATHER]
      })

      this.send("played:medic", {
        cards: JSON.stringify(discard)
      }, true);

      this.sendNotificationTo(this.foe, this.getName() + " chooses a card from discard pile.")
    }
  },
  "morale_boost": {
    name: "morale_boost",
    description: "Morale Boost: Adds +1 strength to all units in the row, excluding itself.",
    onEachCardPlace: function(card){
      var field = this.field[card.getType()];
      var id = card.getID();
      if(!field.isOnField(card)){
        field.get().forEach(function(_card){
          if(_card.getID() == id) return;
          if(_card.hasAbility("hero")) return;
          if(_card.getType() != card.getType()) return;
          _card.setBoost(id, 0);
        })
        this.off("EachCardPlace", card.getUidEvents("EachCardPlace"));
        return;
      }

      field.get().forEach(function(_card){
        if(_card.getID() == id) return;
        if(_card.hasAbility("hero")) return;
        if(_card.getType() != card.getType()) return;
        _card.setBoost(id, 1);
      })
    }
  },
  "muster": {
    name: "muster",
    description: "Muster: Find any cards with the same name in your deck and play them instantly.",
    onAfterPlace: function(card){
      var musterType = card.getMusterType();
      var self = this;

      var cardsDeck = this.deck.find("musterType", musterType);
      var cardsHand = this.hand.find("musterType", musterType);

      cardsDeck.forEach(function(_card){
        if(_card.getID() === card.getID()) return;
        self.deck.removeFromDeck(_card);
        self.placeCard(_card, {
          suppress: "muster"
        });
      })
      cardsHand.forEach(function(_card){
        if(_card.getID() === card.getID()) return;
        self.hand.remove(_card);
        self.placeCard(_card, {
          suppress: "muster"
        });
      })
    }
  },
  "tight_bond": {
    name: "tight_bond",
    description: "Tight Bond: Place next to a card with the name same to double the strength of both cards.",
    tightBond: true
  },
  "spy": {
    name: "spy",
    description: "Spy: Place on your opponents battlefield (counts towards their total strength) then draw two new cards from your deck.",
    changeSide: true,
    onAfterPlace: function(){
      this.draw(2);
      this.sendNotification(this.getName() + " activated Spy! Draws +2 cards.")
    }
  },
  "weather_fog": {
    name: "weather_fog",
    description: "Sets the strength of all Ranged Combat cards to 1 for both players.",
    weather: 1
  },
  "weather_rain": {
    name: "weather_rain",
    description: "Sets the strength of all Siege Combat cards to 1 for both players.",
    weather: 2
  },
  "weather_frost": {
    name: "weather_frost",
    description: "Sets the strength of all Close Combat cards to 1 for both players.",
    weather: 0
  },
  "weather_clear": {
    name: "weather_clear",
    description: "Removes all Weather Card (Biting Frost, Impenetrable Fog and Torrential Rain) effects.",
    weather: 5
  },
  "decoy": {
    name: "decoy",
    description: "Decoy: Swap with a card on the battlefield to return it to your hand.",
    replaceWith: true
  },
  "scorch_card": {
    name: "scorch",
    description: "Scorch: Discard after playing. Kills the strongest card(s) in the battlefield.",
    scorch: true,
    removeImmediately: true,
    nextTurn: true
  },
  "scorch": {
    name: "scorch",
    description: "Scorch: Destroy your enemy's strongest close combat unit(s) if the combined strength of all of his or her combat unit(s) is 10 or more.",
    scorchMelee: true
  },
  "commanders_horn": {
    name: "commanders_horn",
    description: "Commander's Horn: Doubles the strength of all unit cards in a row. Except this card.",
    commandersHorn: true
  },
  "commanders_horn_card": {
    name: "commanders_horn",
    description: "Commander's Horn: Doubles the strength of all unit cards in a row. Limited to 1 per row.",
    cancelPlacement: true,
    commandersHorn: true,
    isCommandersHornCard: true
  },
  "foltest_leader1": {
    name: "",
    description: "Pick an Impenetrable Fog card from your deck and play it instantly.",
    onActivate: function(){
      var cards = this.deck.find("key", "impenetrable_fog")
      if(!cards.length) return;
      var card = this.deck.removeFromDeck(cards[0]);
      this.placeCard(card);
    }
  },
  "foltest_leader2": {
    name: "",
    description: "Clear any weather effects (resulting from Biting Frost, Torrential Rain or Impenetrable Fog cards) in play.",
    onActivate: function(){
      this.setWeather(5);
    }
  },
  "foltest_leader3": {
    name: "",
    description: "Doubles the strength of all Siege units, unless a Commander's Horn is already in play on that row",
    onActivate: function(){
      this.setHorn("commanders_horn", 2);
    }
  },
  "foltest_leader4": {
    name: "",
    description: "Destroy your enemy's strongest Siege unit(s) if the combined strength of all his or her Siege units is 10 or more.",
    onActivate: function(){
      //
    }
  },
  "francesca_leader1": {
    name: "",
    description: "Pick a Biting Frost card from your deck and play it instantly",
    onActivate: function(){
      var cards = this.deck.find("key", "biting_frost")
      if(!cards.length) return;
      var card = this.deck.removeFromDeck(cards[0]);
      this.placeCard(card);
    }
  },
  "francesca_leader2": {
    name: "",
    description: "Doubles the strength of all your Ranged Combat units (unless a Commander's Horn is also present on that row).",
    onActivate: function(){
      this.setHorn("commanders_horn", 1);
    }
  },
  "francesca_leader3": {
    name: "",
    description: "Draw an extra card at the beginning of the battle.",
    onActivate: function(){
      //
    }
  },
  "francesca_leader4": {
    name: "",
    description: "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more.",
    onActivate: function(){
      //
    }
  },
  "eredin_leader1": {
    name: "",
    description: "Double the strength of all your Close Combat units (unless a Commander's horn is also present on that row).",
    onActivate: function(){
      this.setHorn("commanders_horn", 0);
    }
  },
  "eredin_leader2": {
    name: "",
    description: "Restore a card from your discard pile to your hand.",
    onActivate: function(){
      var discard = this.player.getDiscard();

      discard = this.filter(discard, {
        "ability": "hero",
        "type": [card.constructor.TYPE.SPECIAL, card.constructor.TYPE.WEATHER]
      })

      this.send("played:emreis_leader4", {
        cards: JSON.stringify(discard)
      }, true);
    }
  },
  "eredin_leader3": {
    name: "",
    description: "Discard 2 card and draw 1 card of your choice from your deck.",
    onActivate: function(){
      //
    }
  },
  "eredin_leader4": {
    name: "",
    description: "Pick any weather card from your deck and play it instantly.",
    onActivate: function(){
      //
    }
  },
  "emreis_leader1": {
    name: "",
    description: "Look at 3 random cards from your opponent's hand.",
    onActivate: function(){
      //
    }
  },
  "emreis_leader2": {
    name: "",
    description: "Pick a Torrential Rain card from your deck and play it instantly.",
    onActivate: function(){
      var cards = this.deck.find("key", "torrential_rain")
      if(!cards.length) return;
      var card = this.deck.removeFromDeck(cards[0]);
      this.placeCard(card);
    }
  },
  "emreis_leader3": {
    name: "",
    description: "Cancel your opponent's Leader Ability.",
    onActivate: function(){
      //
    }
  },
  "emreis_leader4": {
    name: "",
    description: "Draw a card from your opponent's discard pile.",
    waitResponse: true,
    onActivate: function(card){
      var discard = this.foe.getDiscard();

      discard = this.filter(discard, {
        "ability": "hero",
        "type": [card.constructor.TYPE.SPECIAL, card.constructor.TYPE.WEATHER]
      })

      this.send("played:emreis_leader4", {
        cards: JSON.stringify(discard)
      }, true);
    }
  },
  "hero": {
    name: "hero",
    description: "Hero: Not affected by special cards, weather cards or abilities."
  }
}