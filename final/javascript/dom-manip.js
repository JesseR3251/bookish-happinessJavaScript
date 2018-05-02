var body = '<ul style = "list-style-type: none; margin:0px;padding:0px;display: inline;">';

pages.forEach(function (element) {
    body += '<li style = "display: inline;"><a href="' + element[1] + '">' + element[0] + '</a></li>&ensp;'
});
body += '</ul>'

document.getElementById('dom').innerHTML = body;
