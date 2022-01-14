const { EmailValidator } = require("./valEmail");
const { NameValidator } = require("./valName");

const validateEmail = new EmailValidator;
const validateName = new NameValidator;

let name = document.getElementsByTagName("user_name")
let email = document.getElementsByTagName("user_email")

function validateForm(name, email) {

    let val1 = validateName.noWhiteSpaces(name)

    let val2 = validateEmail.validateEmail(email)

    if(val1 === true && val2 === true) {
        return true
    } else {
        return false
    }

}

validateForm(name.value, email.value)