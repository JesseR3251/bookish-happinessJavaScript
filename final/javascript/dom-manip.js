var body = '<ul>';

pages.forEach(function (element) {
    body += '<li><a href="' + element[1] + '">' + element[0] + '</a></li>'
});
body += '</ul>'
//for (var i = 0; pages.length < i; i++) {
//    
//}

document.getElementById('dom').innerHTML = body;
