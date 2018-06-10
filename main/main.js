'use strict'

function split(string) {
  let arr = string.match(/\d+/g).map((s) => s.split(''));
  return (arr.length != 1)? {system: arr[0], userInput: arr[1]}
  : {system: arr[0], userInput: []};
}

function print(counter) {
  return counter.reduce((s, e) => s += e.join(''), '');
}

function compareNum(numString){
  let [a, b] = [0, 0];
  if(numString.userInput !== [] && numString.userInput.length == numString.system.length){
    for(var index in numString.system){
      (numString.system[index] === numString.userInput[index])? a++
      : (numString.userInput.includes(numString.system[index]))? b++ : null;
    }
  }
  return [[a, 'A'], [b, 'B']];
}
``
function main(string) {
  const numString = split(string);
  var counter = compareNum(numString);
  return print(counter);
};


module.exports = main;
