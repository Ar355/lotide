const args = process.argv.slice(2);

const reverse = function() {
  
  //console.log(array);
  //console.log(array.length);
  //console.log(array[0].length);
  for(let i = 0; i < args.length; i++) {
    let newString = '';
    for(let j=args[i].length - 1; j >= 0 ; j--) {
      newString += args[i][j]
    }
    console.log(args[i][j]);
    console.log(newString);
  }
  
 return newString;
};
console.log(reverse());