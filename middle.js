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
//   return true;
// };


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
//   }
// };




const middle = function(array) {
  let newArray = [];

  if (array.length <= 2) {
    return newArray;

  } else if (array.length % 2) {
    let index = Math.floor(array.length / 2);
    newArray.push(array[index]);
    return newArray;
    

  } else {
    let index = Math.floor(array.length / 2);
    index = Math.floor(array[index]);
    newArray.push(array[index]);
    newArray.push(array[index] - 1);
    return newArray;
  }
};


module.exports = middle;