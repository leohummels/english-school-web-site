let slideBox = document.querySelector(".slideBox");
let box = document.getElementsByClassName("box");
let arrowR = document.querySelector(".arrowR");
let arrowL = document.querySelector(".arrowL");
let n = 0;


let next = function() {
        box[n].classList.remove("class", "boxactive")
        n++
    if (n < box.length) {
        box[n].classList.add("class", "boxactive") 
    } else {
        n = 0
        box[n].classList.add("class", "boxactive")       
    }
    console.log(n)
}
        

let previous = function()  {
        box[n].classList.remove("class", "boxactive")
        n--
        if (n >= 0) {
        box[n].classList.add("class", "boxactive") 
        } else {
        n = 2
        box[n].classList.add("class", "boxactive")       
}
    }

arrowL.addEventListener("click", previous); 
arrowR.addEventListener("click", next); 


