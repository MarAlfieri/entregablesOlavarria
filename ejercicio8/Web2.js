"use strict";
//función para mostrar u ocultar elementos del div
function mostrarocultar() {
    let divs = document.getElementsByTagName("div");
    //recorro los div obtenidos de DOM para configurar la propiedad visible
    for (let index = 0; index < divs.length; index++) {
        //De esta forma no funciona, aunque la logica me daba
        /* if (divs[index].style.visibility === "visible") {
            console.log(divs[index])
            console.log(divs[index].style.visibility === "visible")
            divs[index].style.visibility = "hidden";
        } else {
            divs[index].style.visibility = "visible";
        }*/
       //de esta si, gracias a que pregunte a gente avanzada en el tema.
        divs[index].classList.toggle("ocultar");
    }
}
//Creo un arreglo con los elementos button
let botones = document.getElementsByTagName("button");
//Verifico los click de los botones del arreglo
for (let index = 0; index < botones.length; index++) {
    botones[index].addEventListener("click",mostrarocultar);
}
