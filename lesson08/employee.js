function employeeObject(theName, theDepartment, theExtension) {
  this.name = theName;
  this.department = theDepartment;
  this.extension = theExtension;
  this.showEmployee = showEmployee;
}
function showEmployee() {
  var info = '';
  info += 'Employee: ' + this.name + '\n';
  info += 'Department: ' + this.department + '\n';
  info += 'Extension: ' + this.extension + '\n';
  alert(info);
}
function showAllEmployees() {
  var info = '';
  for (var i = 1; i < len; i++) {
    info += 'Employee: ' + employees[i].name + '\n';
    info += 'Department: ' + employees[i].department + '\n';
    info += 'Extension: ' + employees[i].extension + '\n\n';
  }
  alert(info);
}