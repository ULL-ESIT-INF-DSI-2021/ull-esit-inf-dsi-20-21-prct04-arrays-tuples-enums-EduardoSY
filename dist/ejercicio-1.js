"use strict";
/**
 * Asigna un valor numerico a un color
 * @param color Color de la resistencia
 * @returns Valor que corresponde al color
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeResistor = exports.standard = void 0;
function standard(color) {
    color = color.toLowerCase();
    let result = 0;
    switch (color) {
        case 'negro':
            result = 0;
            break;
        case 'marron':
            result = 1;
            break;
        case 'rojo':
            result = 2;
            break;
        case 'naranja':
            result = 3;
            break;
        case 'amarillo':
            result = 4;
            break;
        case 'verde':
            result = 5;
            break;
        case 'azul':
            result = 6;
            break;
        case 'violeta':
            result = 7;
            break;
        case 'gris':
            result = 8;
            break;
        case 'blanco':
            result = 9;
            break;
    }
    return result;
}
exports.standard = standard;
/**
 * Dado los colores de una resistencia obtenemos su correspondiente
 * valor numerico.
 * @param colores Colores de entrada de la resistencia separados por guion
 * @returns Valor numerico de la resistencia
 */
function decodeResistor(colores) {
    let resultadostring = '';
    let colors = colores.split('-');
    if (colors.length == 1) {
        resultadostring += 0;
        resultadostring += standard(colors[0]);
    }
    else {
        resultadostring += standard(colors[0]);
        resultadostring += standard(colors[1]);
    }
    return +resultadostring;
}
exports.decodeResistor = decodeResistor;
// console.log("Colores: " + decodeResistor('violeta-marron-naranja'));
