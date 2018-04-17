function titleCase(inputString) {
  inputString = inputString.toLowerCase();
  var firstCharacter = inputString.substr(0,1);
  return firstCharacter.toUpperCase() +
    inputString.substr(1,inputString.length-1);
};