

var hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};



hero.prototype ={
  talk: function(statement){
    return(statement +this.name);
  },
  eat: function(food){
    if (food.poisonous){
      this.health -= (food.energy / 2)
    } else {
      if (food.type === this.favFood)
        {this.health += (food.energy * 1.5)
       }else{
        this.health += food.energy
        }
      }
    }

  // hurt: function(villian){
  //   if(villian.attack){
  //     this.health -= 30}else{
  //       this.health
  //     }
  //   }
  // }  
};

module.exports = hero