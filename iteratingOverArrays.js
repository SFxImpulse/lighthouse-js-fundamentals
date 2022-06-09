// Example of iterating over arrays.

const packingList = ["bowls", "plates", "pots", "eating utensils", "glasses", "cups", "cooking utensils"];

// With a for loop.

/*

console.log("kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

*/

// With a while loop.

console.log("Kitchen stuff to pack:");
let i = 0
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

