"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyAll = void 0;
/**
 * Debemos multiplicar un array de numeros por
 * otro numero
 * @param numeros Arrays de numero a multiplicar. Será multiplicado
 * por el valor del segundo parentesis que es recibido en
 * num.
 * @return Array multiplicado
 * ```typescript
 *multiplyAll([2, 6, 8])(3)
 * ```
 */
function multiplyAll(numeros) {
    return function (num) {
        let result = [];
        for (let valor of numeros) {
            result.push(valor * num);
        }
        return result;
    };
}
exports.multiplyAll = multiplyAll;
;
// console.log(multiplyAll([2, 6, 8])(3));
