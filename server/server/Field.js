var _ = require("underscore");

var Field = (function () {
  var Field = function (side, hasHornField) {
    if (!(this instanceof Field)) {
      return (new Field(side, hasHornField));
    }
    this._hasHornField = hasHornField || false;
    this._cards = [];
    this.side = side;
  };
  var r = Field.prototype;
  r._cards = null;
  r._score = 0;
  r._hasHornField = null;
  r._hornCard = null;
  r.side = null;

  r.add = function (card, isHorn) {
    if (isHorn && this._hasHornField) {
      this.setHorn(card);
      return;
    }
    this._cards.push(card);
    this.updateScore();
  }

  r.get = function () {
    return this._cards;
  }

  r.getScore = function () {
    this.updateScore();
    return this._score;
  }

  r.updateScore = function () {
    this._score = 0;
    for (var i = 0; i < this._cards.length; i++) {
      var card = this._cards[i];
      this._score += card.getPower();
    }
  }

  r.getPosition = function (card) {
    for (var i = 0; i < this._cards.length; i++) {
      if (this._cards[i].getID() === card.getID()) return i;
    }
    return -1;
  }

  r.isOnField = function (card) {
    if (this._hasHornField && this.getHorn() && card.getID() === this.getHorn().getID()) {
      return true;
    }
    return this.getPosition(card) >= 0;
  }

  r.replaceWith = function (oldCard, newCard) {
    var index = this.getPosition(oldCard);
    this._cards[index] = newCard;
    oldCard.reset();
    for (var event in oldCard._uidEvents) {
      if (this.side && this.side.off) {
        this.side.off(event, oldCard.getUidEvents(event));
      }
    }
    return oldCard;
  }

  r.getCard = function (id) {
    for (var i = 0; i < this._cards.length; i++) {
      var card = this._cards[i];
      if (card.getID() == id) return card;
    }
    return -1;
  }

  r.removeAll = function () {
    var tmp = this._cards.slice();
    var self = this;
    var cardsToRemove = [];
    var summonCards = [];

    tmp.forEach(function (card) {
      if (card.hasAbility("summon_avenger")) {
        var summonCard = self.side.createCard(card.getSummonType());
        var position = self.getPosition(card);
        cardsToRemove.push(card);
        summonCards.push(summonCard);
        self._cards.splice(position, 1);
      } else {
        card.reset();
        if (card.__lock) {
          return;
        }
        for (var event in card._uidEvents) {
          if (self.side && self.side.off) {
            self.side.off(event, card.getUidEvents(event));
          }
        }
        cardsToRemove.push(card);
      }
    });

    cardsToRemove.forEach(function (card) {
      var position = self.getPosition(card);
      self._cards.splice(position, 1);
    });

    this._cards = _.without(this._cards, null);

    summonCards.forEach(function (summonCard) {
      self.side.placeCard(summonCard);
    });

    if (this.getHorn()) {
      var card = this.getHorn();
      card.reset();
      this.setHorn(null);
      for (var event in card._uidEvents) {
        self.side.off(event, card.getUidEvents(event));
      }
      tmp.push(card);
    }

    return tmp;
  };

  r.removeCard = function (cards) {
    var res = [];
    var _cards = this.get();
    if (!Array.isArray(cards)) {
      cards = [cards];
    }
    var self = this;
    cards.forEach(function (card) {
      if (card.hasAbility("summon_avenger")) {
        var summonCard = self.side.createCard(card.getSummonType());
        _cards.splice(self.getPosition(card), 1)
        self.side.placeCard(summonCard);
        self.side.battle.sendNotification(card.getName() + " was replaced by " + summonCard.getName() + "!");
      } else {
        card.reset();
        for (var event in card._uidEvents) {
          if (this.side && this.side.off) {
            this.side.off(event, card.getUidEvents(event));
          }
        }
        res.push(_cards.splice(self.getPosition(card), 1)[0]);
      }
    })

    return res;
  }

  r.getInfo = function () {
    var self = this;
    return {
      cards: self._cards,
      horn: self.getHorn(),
      score: self._score
    }
  }

  r.getHorn = function () {
    if (!this._hasHornField) return null;
    return this._hornCard;
  }

  r.setHorn = function (card) {
    if (!this._hasHornField) return null;
    this._hornCard = card;
  }

  r.getHighestCards = function (noHeroes) {
    noHeroes = noHeroes || false;
    var res = [];
    var highest = 0;

    this.get().forEach(function (card) {
      if (noHeroes && card.hasAbility("hero")) return;
      highest = card.getPower() > highest ? card.getPower() : highest;
    })

    this.get().forEach(function (card) {
      if (noHeroes && card.hasAbility("hero")) return;
      if (card.getPower() === highest) res.push(card);
    });

    return res;
  }

  return Field;
})();

module.exports = Field;