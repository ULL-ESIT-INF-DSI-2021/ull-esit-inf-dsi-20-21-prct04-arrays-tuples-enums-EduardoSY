"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distancia = exports.producto = exports.resta = exports.suma = void 0;
/**
 * Sumar las coordenadas de dos puntos
 * @param p1 Punto 1 a sumar
 * @param p2 Punto 2 a sumar
 * @returns Suma de los dos puntos
 */
function suma(p1, p2) {
    let result = [0, 0, 0];
    if (p1.length != p2.length) {
        return 'Los puntos no son compatibles';
    }
    for (let i = 0; i < p1.length; i++) {
        result[i] = p1[i] + p2[i];
    }
    return result;
}
exports.suma = suma;
/**
 * Restar las coordenadas de dos puntos
 * @param p1 Punto 1 a restar
 * @param p2 Punto 2 a restar
 * @returns Resta de ambos puntos
 */
function resta(p1, p2) {
    let result = [0, 0, 0];
    if (p1.length != p2.length) {
        return 'Los puntos no son compatibles';
    }
    for (let i = 0; i < p1.length; i++) {
        result[i] = p1[i] - p2[i];
    }
    return result;
}
exports.resta = resta;
/**
 * Multiplicar un punto por un valor
 * @param p1 Punto a ser multiplicado
 * @param num Valor por el que será multiplicado
 * @returns Punto multiplicado
 */
function producto(p1, num) {
    let result = [0, 0, 0];
    let index = 0;
    for (let valor of p1) {
        result[index] = valor * num;
    }
    return result;
}
exports.producto = producto;
/**
 * Calcular la distancia entre dos puntos
 * @param p1 Punto numero 1
 * @param p2 Punto numero 2
 * @returns Distancia entre ambos puntos
 */
function distancia(p1, p2) {
    let result = 0;
    if (p1.length != p2.length) {
        return 'Los puntos no son compatibles';
    }
    for (let i = 0; i < p1.length; i++) {
        result += Math.pow(p1[i] - p2[i], 2);
    }
    result = Math.sqrt(result);
    result = parseFloat(result.toFixed(4));
    return result;
}
exports.distancia = distancia;
// console.log(suma([4, 2], [1, 3]));
// console.log(resta([4, 2], [1, 3]));
// console.log(producto([4, 2], 2));
// console.log(distancia([6, 6, 2], [5, 2, 3]));
