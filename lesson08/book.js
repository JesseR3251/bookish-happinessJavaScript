function Book(theTitle, theAuthor, thePrice) {
  this.title = theTitle;
  this.author = theAuthor;
  this.price = thePrice;
  this.show = showProps;
}
function showProps() {
  var result = '';
  for (var i in this) {
    if (i == 'show' || i == 'addTax') continue;
    result += i + '=' + this[i] + '<br>';
  }
  return result;
}