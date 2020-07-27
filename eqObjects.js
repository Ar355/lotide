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

const eqObjects = function(firsObj, secObj) {
  const firsKeys = Object.keys(firsObj);//create an array with all the object1 keys
  // console.log('Print firstKey: ', firsKeys);
  const secKeys = Object.keys(secObj); //create an array with all the object2 keys
  // console.log('Print secKey: ', secKeys);

  //check if the length of the arrays containing the object keys are equal
  if (firsKeys.length !== secKeys.length) {
    return false;
  } else {
    //loop throu the arrays, sicne they are equal in length use one loop for both
    for (let key of firsKeys) {
      //checking if the value of the object key is an array
      if (Array.isArray(firsObj[key])) {
        //loop throy the arrays, and check fi the value of each is not equal
        for (let i = 0; i < firsObj[key].length; i++) {
          if (firsObj[key][i] !== secObj[key][i]) {
            return false;
          }
        }
      } else {
        // if is not an array than compare if the key values are not equal
        if (firsObj[key] !== secObj[key]) {
          return false;
        }
      }
    }
    return true;// return true if not of the comparison above is false, meaning all the values are equal.
  }
};




//test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
