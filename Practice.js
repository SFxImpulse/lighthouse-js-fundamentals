const whichSchool = function (age) {
  if (age < 13) {
    console.log("Elementary School");
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  }
}

console.log(whichSchool(11));
console.log(whichSchool(17));