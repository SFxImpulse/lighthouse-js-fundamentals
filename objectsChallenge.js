const smartGarbage = function (trash, bins) {
  
  let x = bins.waste
  let y = bins.recycling
  let z = bins.compost

  bins = {
    waste: x,
    recycling: y,
    compost: z
  }
  
  switch (trash) {
    case "waste":
      bins.waste += 1
      break;
    case "recycling":
      bins.recycling += 1
      break;
    case "compost":
      bins.compost += 1
      break;
    default:
      break;
  }
  
  return (trash, bins)

}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));