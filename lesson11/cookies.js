var cookieName = 'clientname';
var currentDate = new Date();

function getNameCookie() {
  var cookieReturn = '';
  var allCookies = document.cookie;
  var cookieArray = allCookies.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var theCookie = cookieArray[i];
    while (theCookie.charAt(0)== ' ') {
      theCookie = theCookie.substring(1, theCookie.length);
    }
    if (theCookie.indexOf(cookieName + '=') == 0) {
      cookieReturn = theCookie.substring(cookieName.length + 1, theCookie.length);
    }
  }
  return cookieReturn;
}

function setNameCookie() {
  var expireDate = new Date(currentDate.getFullYear()+1, currentDate.getMonth(), currentDate.getDate());
  var cookieVal = document.getElementById(cookieName).value;
  var setCookie = cookieName + '=' + cookieVal;
  setCookie += ';expires=' + expireDate.toUTCString();
  alert('Set to: ' + setCookie);
  document.cookie = setCookie;
}

function deleteNameCookie() {
  var expireDate = new Date(currentDate.getFullYear()-1, currentDate.getMonth(), currentDate.getDate());
  var setCookie = cookieName + '=;expires=' + expireDate.toUTCString();
  alert('Delete: ' + setCookie);
  document.cookie = setCookie;
}

function setAuthorCookie() {
  var expireDate = new Date(currentDate.getFullYear()+1, currentDate.getMonth(), currentDate.getDate());
  var setCookie = 'Author=George Cooke';
  setCookie += ';expires=' + expireDate.toUTCString();
  alert('Set to: '+setCookie);
  document.cookie = setCookie;
}

function deleteAuthorCookie() {
  var expireDate = new Date(currentDate.getFullYear()-1, currentDate.getMonth(), currentDate.getDate());
  var setCookie = 'Author=';
  setCookie += ';expires=' + expireDate.toUTCString();
  alert('Delete: ' + setCookie);
  document.cookie = setCookie;
}