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
    var email = document.getElementById('email').value;

    if (emailSubmit(email)) {
        alert('Submitted!')
        document.forms["formInfo"].reset();
        return true
    } else {
        alert('Please enter a valid email address.');
        highlightEmail();
        return false;

    }

}

$(function () {
    $("#datepicker").datepicker();
});


var pass = document.getElementById("password")
pass.addEventListener('keyup', function () {
    checkPassword(pass.value)
})

function checkPassword(password) {
    var strengthBar = document.getElementById("strength")
    var strength = 0;
    if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
        strength += 1
    }
    if (password.match(/[~<>?]+/)) {
        strength += 1
    }
    if (password.match(/[!@£$%^&*()]+/)) {
        strength += 1
    }
    if (password.length > 5) {
        strength += 1
    }
    switch (strength) {
        case 0:
            strengthBar.value = 0;
            break
        case 1:
            strengthBar.value = 20;
            break
        case 2:
            strengthBar.value = 50;
            break
        case 3:
            strengthBar.value = 80;
            break
        case 4:
            strengthBar.value = 100;
            break

    }
}

var maxAmount = 250;

function textCounter(textField, showCountField) {
    if (textField.value.length > maxAmount) {
        textField.value = textField.value.substring(0, maxAmount);
    } else {
        showCountField.value = maxAmount - textField.value.length;
    }
}
