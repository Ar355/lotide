
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const countLetters = function(string) {
  const objectCount = {};
  for (let indx of string) {
    console.log(indx);
    if (objectCount[indx]) {
      console.log('print: ' , indx);
      objectCount[indx]++;
    } else {
      objectCount[indx] = 1;
    }
    
  }
  return objectCount;
};

countLetters('lhl');