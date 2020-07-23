// map func will take tow argumnets
//1. an array to map
//2. a callback function
//the map will return a new array base on the result of the call back func

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  //check if the length is equal
  if (array1.length !== array2.length) {
   
    return  false;
  }
  //check each element of the arrays by looping
  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  console.log('print true');
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertEqual(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]), true);