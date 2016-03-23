
var rat = function(type){
  this.type = type
  };

rat.prototype = {
  touchFood: function(food){
    if (food.poisonous === false){
      food.poisonous = true
      return food
    }else{
      return food
    }
  }
};

module.exports = rat