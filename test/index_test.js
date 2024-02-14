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
});
