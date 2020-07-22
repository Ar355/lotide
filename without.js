const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  //check if the length is equal
  
  if (array1.length !== array2.length) {
   
    return actual = false;
  }
  //check each element of the arrays by looping
  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] !== array2[i]) {
      return actual = false;
    }
  }
  return actual = true;
}

const without = function(array1, itToRem) {
  let newArray = [];
  //check each element of the arrays by looping
  for (let j = 0; j < itToRem.length; j++) {
    
    for (let i = 0; i < array1.length; i++) {
      if (itToRem[j] !== array1[i]) {
        newArray.push(array1[i]);
    }
  }
 }
  return newArray;
}

assertEqual(
  eqArrays(without([1, 2, 3], [1]), [2, 3]), 
  true
);



//asserEqua([2,3], [2,3])
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) , false)

// can you see the 