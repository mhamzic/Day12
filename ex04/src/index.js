function sumFibonacci(num) {
  let prevNumber = 0;
  let curNumber = 1;
  let result = 0;

  while (curNumber <= num) {
    if (curNumber % 2 !== 0) {
      result += curNumber;
    }
    curNumber += prevNumber;
    prevNumber = curNumber - prevNumber;
  }
  return result;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
