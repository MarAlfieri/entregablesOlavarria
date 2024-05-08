import * as rls from 'readline-sync';

let base : number = rls.questionInt("Ingrese la base: ");
let exponente : number = -1
let resultadoPotencia : number
while(exponente < 0) {
    exponente= rls.questionInt("Ingrese un exponente mayor a 0: ");
}

function Potencia ( basefunc : number, expofunc : number) : number {
    let resultado : number = 0;
    resultado = basefunc ** expofunc
return resultado;
}
resultadoPotencia = Potencia(base, exponente);
console.log("La potencia de los númeeros ingresados es: "+ resultadoPotencia);