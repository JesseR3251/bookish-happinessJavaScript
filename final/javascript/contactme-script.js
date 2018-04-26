function emailSubmit(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function highlightEmail() {
    document.getElementById('email').style.backgroundColor = "red";
}

function whiteEmail() {
    document.getElementById('email').style.backgroundColor = "white";
}

function validateField() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");

    if (emailSubmit(email)) {
        alert('Submitted!')
        document.forms["formInfo"].reset();
    } else {
        alert('Please enter a valid email address.');
        highlightEmail();

    }
    return false;
}

$("#validate").bind("click", validateField);

$(function () {
    $("#datepicker").datepicker();
});
