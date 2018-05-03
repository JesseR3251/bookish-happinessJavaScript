// Dynamically loading in the multidimensional array
var currentPage = window.location.pathname;
// HTML Injection, using a horizontal tabbed nav bar
var body = '<ul style = "list-style-type: none; margin:0px;padding:0px;display: inline;">';

pages.forEach(function (element) {
    if (currentPage == element[1]) {
        body += '<li style = "padding: 20px 40px;">' + element[0] + '</li>&ensp;'
    } else {
        body += '<li><a href="' + element[1] + '">' + element[0] + '</a></li>&ensp;'
    }
});
body += '</ul>'

document.getElementById('dom').innerHTML = body;
