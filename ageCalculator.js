const ageCalculator = function (name, yearOfBirth, currentYear) {
  
  let x = name;
  let age = currentYear - yearOfBirth
  return `${x} is ${age} years old.`
}

console.log(ageCalculator('David', 2000, 2022));