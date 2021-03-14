"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meshArray = void 0;
/**
 * Comprobamos que las cadenas que estan encadenadas. Es decir, la palabra
 * siguiente debe empezar por las mismas letras por las que acaba la anterior.
 * @param cadena Array de palabras
 * @return Cadena que, si estan encadenadas, devuelve qué letras hacen la
 * encadenacion. Si no están encadenadas devuelve un mensaje de error.
 */
function meshArray(cadena) {
    let result = '';
    for (let iter = 0; iter < cadena.length - 1; iter++) {
        let num = cadena[iter + 1].indexOf(cadena[iter].
            charAt(cadena[iter].length - 1));
        // console.log(num);
        let cad1 = cadena[iter].length - 1;
        let subcadena = cadena[iter + 1].substr(0, num + 1);
        result += subcadena;
        for (let i = num; i >= 0; i--) {
            if (cadena[iter].charAt(cad1) === cadena[iter + 1].charAt(i)) {
                cad1--;
            }
            else {
                return "Error al encadenar";
            }
        }
    }
    return result;
}
exports.meshArray = meshArray;
// let entrada: string[] = ["allow", "lowering", "ringmaster", "terror"];
// console.log(meshArray(entrada));
