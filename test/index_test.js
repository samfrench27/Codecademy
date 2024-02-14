const assert = require('assert');
const Rooster= require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () =>{
    it('returns a rooster call', () => {

      //setup
      const expected= "Cock a doodle doo!"
      //exercise
      const actual= Rooster.announceDawn();

      //verify
      assert.equal(actual, expected);
    });
  });
  
  describe('.timeAtDawn', () =>{
    it('returns its argument as a string', () => {
      //setup
      const inputNumber= 7;
      const expected= "7";
      //exercise
      const actual= Rooster.timeAtDawn(inputNumber);
      //verify
      assert.equal(actual, expected);
    });
    it('throws a error if range number is less than 0', () => {
      //setup
      const inputNumber= -1;
      const expected= RangeError;
      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
    it('throws a error if range number is greater than 23', () => {
      //setup
      const inputNumber= 24;
      const expected= RangeError;
      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});