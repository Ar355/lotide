
const tail = require('../tail');
const assert = require('chai').assert;

describe("#Tail", () => {
  it(`it shoudld give ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});