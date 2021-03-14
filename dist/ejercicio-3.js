"use strict";
/**
 * Dada una cadena de entrada de numeros y letras, unir
 * las letras en un string y calcular la media de los numeros
 * @param cadena Array de numeros y letras
 * @returns Array con la media y las letras unidas
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.meanAndConcatenate = void 0;
function meanAndConcatenate(cadena) {
    let nnumbers = 0;
    let resultNumber = 0;
    let cadenaAux = '';
    let resultado = [];
    cadena.forEach((item) => {
        if (typeof item === "number") {
            resultNumber += item;
            nnumbers++;
        }
        else if (typeof item === "string") {
            cadenaAux += item;
        }
    });
    resultado.push(parseFloat((resultNumber / nnumbers).toFixed(2)));
    resultado.push(cadenaAux);
    return resultado;
}
exports.meanAndConcatenate = meanAndConcatenate;
// let entrada1: (number|string)[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's',
//  't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
// let entrada2: (number|string)[] = [6, 'd', 1, 'i', 'w', 3, 's'];
// console.log(meanAndConcatenate(entrada2));
