var assert = require('chai').assert;
var Hero = require('../hero_play.js');
var Food = require('../food.js');
var Rat = require('../rat.js');
var Villian = require('../villian.js');



var hero1 = new Hero('Zelda', 100, 'hummous')
var food1 = new Food('shrub', 30)
var food2 = new Food('hummous', 50)
var rat1 = new Rat('black rat')
var villian1 = new Villian('Bulblin', 100, 'club', 30)

describe('hero', function(){
  it('should have a name', function(){
    assert.equal('Zelda', hero1.name)
  });
  it('should have a health', function(){
    assert.equal(100, hero1.health)
  });
  it('should have a fav food', function(){
    assert.equal('hummous', hero1.favFood)
  });
  it('should say its name', function(){
    assert.equal('hello my name is Zelda', hero1.talk('hello my name is '))
  });
  it('should increase health when eat', function(){
    hero1.eat(food1)
    assert.equal(130, hero1.health )
  });

  it('should increase health by 1.5 * energy when eat fav food', function(){
    hero1.eat(food2)
    assert.equal(205, hero1.health)
  });

  it('should decrease health by energy/2 when eat poisonous food', function(){
    rat1.touchFood(food1)
    hero1.eat(food1)
    assert.equal(190, hero1.health)
  });

  // it('should decrease health by 30 when attacked', function(){
  //   hero1.hurt(villian1)
  //   assert.equal(160, hero1.health)

  // });

});