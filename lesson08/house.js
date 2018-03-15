function House(theRooms, theStyle, theYearBuilt, doesHaveGarage) {
  this.rooms = theRooms;
  this.style = theStyle;
  this.yearBuilt = theYearBuilt;
  this.hasGarage = doesHaveGarage;
  this.livingSpace = livingSpace;
  this.maintain = maintain;
}
function livingSpace(length, width, numFloors) {
  return (length * width * numFloors);
}
function maintain() {
  alert('Keep the house in top shape.');
}