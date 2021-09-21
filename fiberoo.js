function fib() {
  const fibs = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  return fibs;
}
console.log(fib());

function numsToStrings(arr) {
  return _.map(arr, num => `${num}`);
}

console.log(numsToStrings(fib()));

function numEvenNums(arr) {
  let numEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      numEven++;
    }
  }
  return numEven;
}

console.log(numEvenNums(fib()));
