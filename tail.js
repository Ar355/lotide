

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
//   }
// };

// const eqArrays = function(array1, array2) {
//   //check if the length is equal
//   if (array1.length !== array2.length) {
   
//     return  false;
//   }
//   //check each element of the arrays by looping
//   for (let i = 0; i < array1.length; i++) {
    
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   console.log('print true');
//   return true;
// };

const tail = function(array) {
  let tailArray = array.slice(1, array.length);
  return tailArray;
  // if (tailArray.length !== array.length - 1) {
  //   console.log('🛑🛑 Assertion Failed: The two arrays are not the same length');
  // } else {
  //   for (let i = 0; i < tailArray.length; i++) {
  //     let j = i + 1;
  //     assertEqual(tailArray[i],array[j]);
  //   }
  // }

  
};


module.exports = tail;