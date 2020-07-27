
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



const letterPositions = function(string) {
  const results = {};


  
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    if (key === ' ') {
      
    } else if (!results[key]) {
     
      results[key] = [i];

    } else {
      
      results[key].push(i);
    }
    
  }
  
  console.log(results);
  return results;
};


//test
console.log(letterPositions("lighthouse in the house"));

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }