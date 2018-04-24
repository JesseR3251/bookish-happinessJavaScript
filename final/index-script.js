function setUserName(userName, nameValue, expireDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expireDate = "expireDate="+d.toUTCString();
    document.cookie = userName + "=" + nameValue + ";" + expireDate + ";path=/";
}

function getUserName(userName) {
    var name = userName + "=";
    var cookieSplit = document.cookie.split(';');
    for(var i = 0; i < cookieSplit.length; i++) {
        var c = cookieSplit[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getUserName("username");
    if (user != "") {
       var test = "Welcome back " + user + ". Your visit count is: " + getCount();
	   document.getElementById("homeText").innerHTML = test;
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setUserName("username", user, 365);
        }
    }
} 
 
cookieName = "Counter";
function performCount() {

  var today = new Date()
  var expireDate = new Date()
  // valid for 1 year
  expireDate.setTime(today.getTime() + 24*365*3600000)

  if (document.cookie) {
     index = document.cookie.indexOf(cookieName);
     } 
   else { 
     index = -1;
     }
  if (index == -1) {
     document.cookie=cookieName+"=1; " + 
           " expireDate=" + expireDate.toGMTString() ;
     } 
  else {
     countbegin = (document.cookie.indexOf("=", index) + 1);
     countend = document.cookie.indexOf(";", index);
     if (countend == -1) {
        countend = document.cookie.length;
        }
     count = eval(document.cookie.substring(countbegin, countend)) + 1;
     document.cookie=cookieName+"="+count+"; " +
           " expireDate=" + expireDate.toGMTString();

     }
  }

function getCount() {
  count = 0;
  if(document.cookie) {
    index = document.cookie.indexOf(cookieName);
    if (index != -1) {
       countbegin = (document.cookie.indexOf("=", index) + 1);
       countend = document.cookie.indexOf(";", index);
       if (countend == -1) {
          countend = document.cookie.length;
          }
       count = document.cookie.substring(countbegin, countend);
       }
    }
  return(count);
  }

   