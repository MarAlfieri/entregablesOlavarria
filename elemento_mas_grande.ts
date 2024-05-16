
let arreglonumeros : number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let mayor : number = 0;

/*
La función la hice pasando como parametro 
el valor global aunque no era necesario y no utilicé
una variable para colocar mensaje y luego retornarlo
en un solo return porque de esta forma significa
menor tiempo de ejecución y espacios de memoria porque
me ahorro un else y una variable:
function paraimpar(mayor:number){
    let mensaje : string
    if (mayor % 2 === 0){
        mensaje = "Par"
    } else {
        mensaje = "Impar"
    }
    Return mensaje
}
*/
function parimpar(mayor:number) {
    if (mayor % 2 === 0) {
        return "Par";
    }
    return "Impar";
}

/*Aquí utilice length para determinar automaticamente
 el tamaño del arreglo aunque ya es conocido */

for (let index = 0; index < arreglonumeros.length; index++) {
    if (arreglonumeros[index]>mayor) {
        mayor = arreglonumeros[index]
    }
}

console.log("El número más grande encontrado es: " + mayor + " y es " + parimpar(mayor))
