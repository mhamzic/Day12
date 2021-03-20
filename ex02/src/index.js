// Only change code below this line

function myCounter(n) {
  if (n < 1) {
    return [];
  } else {
    const returnArray = myCounter(n - 1);
    // myCounter(n - 1);
    // console.log(n);
    returnArray.unshift(n);
    return returnArray;
  }
}

// Only change code above this line
console.log(myCounter(5));
console.log(myCounter(-1));
console.log(myCounter(10));

module.exports = myCounter;
