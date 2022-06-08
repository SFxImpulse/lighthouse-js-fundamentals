// Functions challenge: Voting stations

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

function chooseStations (stations) {
  const goodStations = []
  for (station of stations) {
    
    const capacity = station[1];
   
    if (capacity >= 20) {

    const location = station[2]
    
    if (location === 'school' || location === 'community centre') {
      goodStations.push(station[0]);
      }
    }
  }
  
  return goodStations

} 

console.log(chooseStations(stations));

/*

This function chooses from a preset array of locations and pushes
the locations that meet certain requirements into another array.

*/