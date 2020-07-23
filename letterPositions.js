
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
   
    return false;
  }
  //check each element of the arrays by looping
  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      return false;
    }
  }
  return true;
};



const letterPositions = function() {
  const results = {};

  return results;
};