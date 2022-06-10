const merge = function (arr1, arr2) {
  arr3 = arr1.concat(arr2);
  return arr3.sort()
  
}

console.log(merge([1, 3, 5, 4], [6, 9, 2]));