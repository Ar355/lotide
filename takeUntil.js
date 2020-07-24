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
  return true;
};



const takeUntil = function(array, callback) {
  // initialize an array to hold the data
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }

  return result;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// assertEqual(eqArrays(takeUntil(data1, x => x < 0), [1, 2, 5, 7,2]), true);

// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertEqual((eqArrays(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])), true);

// const results2 = takeUntil(data2, x => x === ',');

// console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]