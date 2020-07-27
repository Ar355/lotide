const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


const findKeyByValue = function(obj, toLook) {
  //create a cons to hold all the keys of the object, it will create an array
  const keys = Object.keys(obj);// an array with all the keys of the object
  // it wil give: [ 'sci_fi', 'comedy', 'drama' ]
  
  //loop throug the array that we created above
  for (let key of keys) {
    //creat another const to hold the idividal values of the keys.
    const value = obj[key];//the individial vlaues of the key that we are stored on keys of the object
    //it will give as belo
    // The Expanse
    // Brooklyn Nine-Nine
    // The Wire
   //compare the value with the one that you are looking for
    if (value === toLook) {
    return key;
    }
  }
  return undefined;
};

//test
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);