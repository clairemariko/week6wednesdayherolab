var assert = require('chai').assert;
var Villian = require('../villian.js');
var Weapon = require('../weapon.js');
var Hero = require('../hero_play.js');


var villian1 = new Villian('Bulblin', 100, 'club', 30);
// var weapon1 = new Weapon('club',30)
var hero1 = new Hero('zelda');

describe('villian', function(){
  it('should have a name', function(){
    assert.equal('Bulblin', villian1.name)
  });

  it('should have a weapon', function(){
    
    assert.equal('club', villian1.weapon)
  });

  it('should have a health', function(){
    assert.equal(100, villian1.health)
  });

  it('should have damage value',function(){
    assert.equal(30, villian1.damage)
  });

  it('should attack a hero', function(){
    villian1.attackHero(hero1)
    assert.equal(true, hero1.hurt)
  });


});

