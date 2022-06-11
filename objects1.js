let umbrella = {
  colour: 'pink',
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already open!";
    } else {
      return "Opening the umbrella.";
    }
  }
}

console.log(umbrella.open());

console.log(umbrella.colour);

