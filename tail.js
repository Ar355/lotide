const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = array.slice(1, array.length);
  if (tailArray.length !== array.length - 1) {
    console.log('🛑🛑 Assertion Failed: The two arrays are not the same length');
  } else {
    for (let i = 0; i < tailArray.length; i++) {
      let j = i + 1;
      assertEqual(tailArray[i],array[j]);
    }
  }

  
};

tail(["Hello", "Lighthouse", "Labs"]);
