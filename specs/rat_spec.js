var assert = require('chai').assert;
var Rat = require('../rat.js');
var Food = require('../food.js');

var rat1 = new Rat('black rat')
var food1 = new Food('shrub')

describe('rat', function(){

it('should have a type', function(){
  assert.equal('black rat', rat1.type)
});
it('should turn food poisonous', function(){
  rat1.touchFood(food1)
  assert.equal(true,food1.poisonous)
});


});