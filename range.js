const range = function (start, end, step) {
  
  let rangeCalculator = [];

  if ((start === undefined || end === undefined || step === undefined) || start > end || step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      rangeCalculator.push(i);
    }
    return rangeCalculator
  }
}

console.log(range(8, 36, 4));