var input = process.argv.splice(2);
console.log(countLetters(input));

function countLetters(input) {
  var inputString = input.join('');
  var count = {};
  for(var i = 0; i < inputString.length; i++) {
     if(count[inputString.charAt(i)] === undefined) {
     count[inputString.charAt(i)] = [i];
   } else {
     count[inputString.charAt(i)].push(i);
   }
    //count[inputString.charAt(i)] = (count[inputString.charAt(i)] === undefined) ? [i] : count[inputString.charAt(i)].push(i); //TODO: Not working now, will come back to
  }
  return count;
}