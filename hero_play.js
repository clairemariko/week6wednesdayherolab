

var hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};



hero.prototype ={
  talk: function(statement){
    return(statement +this.name);
  }
};

module.exports = hero