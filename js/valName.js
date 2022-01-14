class NameValidator {
    
    constructor (name) {
        this.name = name
    }
    
    noWhiteSpaces(name) {
        let regexp = /^\s+$/gi
        if(name.match(regexp)) {
        return "Por favor, insira um nome válido"
        } else {
        return true
        }
    }

}

module.exports = new NameValidator;