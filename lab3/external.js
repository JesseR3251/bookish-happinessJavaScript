// Calculate today's date
var currentDate = new Date();
var currentDateDD = currentDate.getDate();
var currentDateMM = currentDate.getMonth();
var currentDateYYYY = currentDate.getFullYear();

// Appending a zero if the day is less than 10
if (currentDateDD < 10) {
    currentDateDD = '0' + currentDateDD;
}

// Appending a zero if the month is less than 10
if (currentDateMM < 10) {
    currentDateMM = '0' + currentDateMM;
}

// Creating a current date object
var currentDate = new Date(currentDateYYYY, currentDateMM, currentDateDD, '12', '00', 00);

// Calculate the user's birthday
var userBirthDay = prompt('Please enter your birthday (MM-DD): ');
var userBirthDayMM = userBirthDay.substring(0, 2) - 1;
var userBirthDayDD = userBirthDay.substring(3, 5);
var birthDateYYYY = currentDate.getFullYear();

// Creating birth date object first
var userBirthDate = new Date(birthDateYYYY, userBirthDayMM, userBirthDayDD, '09', '00', '00');

// Check to see if the date entered was before today
if (userBirthDate <= currentDate) {
    birthDateYYYY = birthDateYYYY += 1;
}

// Add a year if the date entered was before today.
userBirthDate = new Date(birthDateYYYY, userBirthDayMM, userBirthDayDD, '09', '00', '00');

// Calculate the user's next birthday
var birthDateDD = userBirthDate.getDate();

// Calculating the day of week using an array.
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var birthDateDOW = weekday[userBirthDate.getDay()]

// Calculating the month name using an array.
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var birthDateMonthName = month[userBirthDayMM];

// Appending a zero to the day if it's less than 10.
if (userBirthDayDD < 10) {
    birthDateDD = '0' + birthDateDD;
}

// Concating all of the date elements together.
var nextBirthday = birthDateDOW + ', ' + birthDateMonthName + ' ' + birthDateDD + ', ' + birthDateYYYY;

// Calculate the difference in days between the two dates
var DateDiffDays = function (date1, date2) {
    currentDate = new Date(date1);
    userBirthDay = new Date(date2);
    // Subtracting the birthdate and the current date, converting to days. 
    return Math.floor((Date.UTC(userBirthDay.getFullYear(), userBirthDay.getMonth(), userBirthDay.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));


}

// Show days till next birthday, and show next birthday
function PrintUserBirthDateInfo() {
    // Printing difference in days
    document.getElementById("dayDiff").innerHTML =
        'Your next birthday is in ' + DateDiffDays(currentDate, nextBirthday) + ' days!';
    // Printing next birthday
    document.getElementById("dateCalc").innerHTML =
        'The date of your next birthday is: ' + nextBirthday + '.';
}
