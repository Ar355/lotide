//const emoFail = String.fromCodePoint(u+1F6D1);
//const emoPass = String.fromCodePoint(2714);
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const head = function(array) {
  if (array.legth <= 0) {
    return undefined;
  } else {
    return array[0];
  }
}
//test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");