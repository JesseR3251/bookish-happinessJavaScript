function newWindow() {
  open('example2.html','documentWindow',
    'toolbar=1,location=1,status=no,width=300,' + 
    'height=200,resizable=0');
}

function writeWindow() {
  var newWindow;
  newWindow = open('','dynamicWindow','toolbar=1,location=1');
  newWindow.document.open();
  newWindow.document.write('Some text for the new window.');
  newWindow.document.write('<hr><input type="button" value="Resize Window"  onclick="window.resizeTo(300,400);"/>');
  newWindow.document.write('<input type="button" value="Close Window" onclick="window.close();"/>');
  newWindow.document.close();
}