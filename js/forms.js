import {noWhiteSpaces, valEmail} from "./valEmail.js";
//import NameValidator from "./valName.js";

//const validator = valid();

let name = document.getElementsByTagName("user_name")
let email = document.getElementsByTagName("user_email")

function validateForm(name, email) {
    const val1 = noWhiteSpaces(name)
    const val2 = valEmail(email)

    if(val1 === true && val2 === true) {
        console.log(val1 + val2)
        return true
    } else {
        console.log(val1 + val2)
        return false
    }
}

const validate = validateForm(name.value, email.value)

document.addEventListener("click", validateForm)