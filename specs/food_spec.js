var assert = require('chai').assert;
var Food = require('../food.js');

var food1 = new Food('shrub', 30);


describe("Food", function(){

 it("should have a type", function(){
   assert.equal('shrub', food1.type)
 });

 it("should have an energy value", function(){
    assert.equal(30, food1.energy)
 });


});