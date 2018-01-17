function Aframe(floors, pitch, bedroom, bath, doors, squFt, maxOccupants, inOrder) {
  this.floors = floors;
  this.pitch = pitch;
  this.bedroom = bedroom;
  this.bath = bath;
  this.doors = doors;
  this.squFt = squFt;
  this.maxOccupants = maxOccupants;
  this.inOrder = inOrder;
}

Aframe.prototype.clean = function() {
  if (!this.inOrder) {
    this.inOrder = true;
    console.log('The Aframe has been cleaned');
  } else {
    console.log('The Aframe is already clean');
  }
};

let myCabin = new Aframe(3, 5, 2, 2, 2, 700, 6, false);

console.log(myCabin);

myCabin.clean();

console.log(myCabin);
