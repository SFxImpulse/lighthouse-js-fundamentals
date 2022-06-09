const lastIndexOf = function (arr, num) {
  let index = 0;
  let match = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] = num) {
      index = i;
      match = true;
    break;
    }
  }
  if (match) {
    return index;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([1, 2, 3, 2,], 2))