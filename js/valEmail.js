class EmailValidator {
    
    constructor (email) {
        this.email = email
        //typeof this.email == String
    }

    valEmail(email) {
        let regexp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)?(\.[a-z]{2,3})$/gi
        
            if(email.match(regexp)) {
                return true
            }  else {
                return "Por favor, insira uma e-mail válido."
            }
        
    }
}


module.exports = new EmailValidator;