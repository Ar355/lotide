//const emoFail = String.fromCodePoint(u+1F6D1);
//const emoPass = String.fromCodePoint(2714);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};
//test
assertEqual('one', 'one');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 'one');
assertEqual(5,'5');