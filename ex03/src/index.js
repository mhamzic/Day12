// Only change code below this line

function rangeOfNumbers(startN, endN) {
  if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number";
  }

  if (startN == endN) {
    return [startN];
  } else {
    const items = rangeOfNumbers(startN, endN - 1);
    items.push(endN);
    return items;
  }
}

// Only change code above this line

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));

module.exports = rangeOfNumbers;
