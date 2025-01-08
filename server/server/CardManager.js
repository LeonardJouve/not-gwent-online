var Card = require("./Card");

var CardManager = (function(){
  var CardManager = function(){
    if(!(this instanceof CardManager)){
      return (new CardManager());
    }
    
    this._id = 0;
    this._cards = {};
  };
  var r = CardManager.prototype;
  r._id = null;
  r._cards = null;

  r.create = function(key, owner) {
    return this._cards[this._id] = Card(key, owner, this._id++);
  }


  return CardManager;
})();

module.exports = CardManager;