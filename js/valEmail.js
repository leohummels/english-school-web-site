
export function valEmail(email) {
        let regexp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)?(\.[a-z]{2,3})$/gi
        let result = ""
            if(String(email).match(regexp)) {
                result = true
            }  else {
                result = "Por favor, insira uma e-mail válido."
            }
        return result
        
    }

export function noWhiteSpaces(nome) {
        let regexp = /\s+/gi
        let result = ""
        if(String(nome).match(regexp)) {
        result = "Por favor, insira um nome válido"
        } else {
        result = true
        }
        return result
    }



//module.exports = new EmailValidator;