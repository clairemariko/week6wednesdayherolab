var assert = require('chai').assert;
var Hero = require('../hero_play.js')

var hero1 = new Hero('Zelda', 100, 'shrub')

describe('hero', function(){
  it('should have a name', function(){
    assert.equal('Zelda', hero1.name)
  });
  it('should have a health', function(){
    assert.equal(100, hero1.health)
  });
  it('should have a fav food', function(){
    assert.equal('shrub', hero1.favFood)
  });
  it('should say its name', function(){
    assert.equal('hello my name is Zelda', hero1.talk('hello my name is '))
  });
});