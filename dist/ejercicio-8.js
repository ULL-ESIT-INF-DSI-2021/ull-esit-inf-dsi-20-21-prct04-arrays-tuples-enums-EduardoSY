"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agent = void 0;
/**
 * Dado un tablero y dos puntos, uno e inicio y otro de fin,
 * encontrar un camino y devolverlo indicando los
 * movimientos.
 * @param X Tamaño X del tablero
 * @param Y Tamaño Y del tablero
 * @param inicio  Punto de inicio
 * @param fin Punto final
 * @returns Recorrido desde inicio a fin
 */
function agent(X, Y, inicio, fin) {
    let recorrido = [];
    if ((inicio[0] >= X) || (inicio[1] >= Y) || (fin[0] >= X) || (fin[1] >= Y)) {
        recorrido.push('Fuera de los limites');
        return recorrido;
    }
    let moving = [inicio[0], inicio[1]];
    while ((moving[0] != fin[0]) && (moving[1] != fin[1])) {
        if (moving[0] > fin[0]) {
            moving[0]--;
            recorrido.push('Oeste');
        }
        if (moving[0] < fin[0]) {
            moving[0]++;
            recorrido.push('Este');
        }
        if (moving[1] > fin[1]) {
            moving[1]--;
            recorrido.push('Sur');
        }
        if (moving[1] < fin[1]) {
            moving[1]++;
            recorrido.push('Norte');
        }
    }
    return recorrido;
}
exports.agent = agent;
// let inicio: Punto = [1, 3];
// let fin: Punto = [7, 5];
// console.log(agent(6, 6, inicio, fin));
