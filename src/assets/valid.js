// Validation Code for inputs

let firstName = document.forms["form"]["First name"]
let lastName = document.forms["form"]["Last name"]
let email = document.forms["form"]["email"]
let message = document.forms["form"]["message"]

let firstname_error = document.querySelector("#firstname_error")
let lastname_error = document.querySelector("#lastname_error")
let email_error = document.querySelector("#email_error")
let message_error = document.querySelector("#message_error")

function validated() {
    if (firstName.value.length < 1) {
        firstName.style.border = "1px solid red"
        firstName.focus();
        return false
    }
}