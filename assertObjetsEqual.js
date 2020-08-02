const assertEqualObj = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`✔️✔️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  if (inspect(actual) === inspect(expected)) {
    console.log(`✔️✔️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


//test
const cd = { c: "1", d: ["2", 3] };
const dc = { c: "1", d: ["2", 3] };
assertEqualObj(cd, dc);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqualObj(cd, cd2); // => false
