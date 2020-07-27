const findKey = function(object, callback) {
  for (let key in object) {
    //key is a string
    //call back needs an object
    let value = object[key];
    if (callback(value)) {
      return key;
    }
    
  }
  return undefined;
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};



console.log(findKey(object1, x => x.stars === 2));
