// A function that tells you when a number is odd.

function isOdd(num) {
  return num % 2 === 0 + 1;
}

const threeIsOdd = isOdd(3);

console.log(`3 is odd: ${threeIsOdd}`);