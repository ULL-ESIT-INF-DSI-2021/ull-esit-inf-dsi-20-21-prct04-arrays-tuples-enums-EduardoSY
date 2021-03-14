/**
 * Punto bidimensional.
 */
type Punto = [number, number];

/**
 * Sumar las coordenadas de dos puntos
 * @param p1 Punto 1 a sumar
 * @param p2 Punto 2 a sumar
 * @returns Suma de los dos puntos
 */
export function suma(p1: Punto, p2: Punto): Punto {
  return [p1[0] + p2[0], p1[1] + p2[1]];
}

/**
 * Restar las coordenadas de dos puntos
 * @param p1 Punto 1 a restar
 * @param p2 Punto 2 a restar
 * @returns Resta de ambos puntos
 */
export function resta(p1: Punto, p2: Punto): Punto {
  return [p1[0] - p2[0], p1[1] - p2[1]];
}

/**
 * Multiplicar un punto por un valor
 * @param p1 Punto a ser multiplicado
 * @param num Valor por el que será multiplicado
 * @returns Punto multiplicado
 */
export function producto(p1: Punto, num: number): Punto {
  return [p1[0] * num, p1[1] * num];
}

/**
 * Calcular la distancia entre dos puntos
 * @param p1 Punto numero 1
 * @param p2 Punto numero 2
 * @returns Distancia entre ambos puntos
 */
export function distancia(p1: Punto, p2: Punto): number {
  return parseFloat(Math.sqrt(Math.pow(p1[0] - p2 [0], 2) +
  Math.pow(p1[1] - p2 [1], 2)).toFixed(4));
}

// console.log(suma([4, 2], [1, 3]));
// console.log(resta([4, 2], [1, 3]));
// console.log(producto([4, 2], 2));
// console.log(distancia([4, 6], [1, 5]));