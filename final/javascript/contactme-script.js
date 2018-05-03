var maxAmount = 250;


// Email RegEx, check to see if email is valid syntax
function emailSubmit(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Highlights email if it is wrong for some reason.
function highlightEmail() {
    document.getElementById('email').style.backgroundColor = "red";
}

// Email is set back to white once user clicks back into the field
function whiteEmail() {
    document.getElementById('email').style.backgroundColor = "white";
}

// Validation process. Submits and resets form is okay, otherwise it will highlight the field with red for error.
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

// Jquery Popup Calendar
$(function () {
    $("#datepicker").datepicker();
});


var pass = document.getElementById("password")
// Listener for each key press, it will check if the password is strong
pass.addEventListener('keyup', function () {
    checkPassword(pass.value)
})

function checkPassword(password) {
    var strengthBar = document.getElementById("strength")
    var strength = 0;
    // Check if uppercase/lowercase/ or numbers are used
    if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
        strength += 1
    }
    // Check for specific symbols
    if (password.match(/[~<>?]+/)) {
        strength += 1
    }
    // Check for number symbols
    if (password.match(/[!@£$%^&*()]+/)) {
        strength += 1
    }
    // Check for length
    if (password.length > 5) {
        strength += 1
    }
    // Switch to determine the bar's progress
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
// Text area counter. Always checking to see if the length is the max, and counting it in the process. The area will stop accepting characters after 250.
function textCounter(textField, showCountField) {
    if (textField.value.length > maxAmount) {
        textField.value = textField.value.substring(0, maxAmount);
    } else {
        showCountField.value = maxAmount - textField.value.length;
    }
}
