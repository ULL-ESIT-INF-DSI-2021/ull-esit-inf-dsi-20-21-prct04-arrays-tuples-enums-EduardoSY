/**
 * Punto bidimensional.
 */
type PuntoNdim = [number, number, number, ...number[]];

/**
 * Sumar las coordenadas de dos puntos
 * @param p1 Punto 1 a sumar
 * @param p2 Punto 2 a sumar
 * @returns Suma de los dos puntos
 */
export function suma(p1: PuntoNdim, p2: PuntoNdim): PuntoNdim|string {
  let result: PuntoNdim = [0, 0, 0];
  if (p1.length != p2.length) {
    return 'Los puntos no son compatibles';
  }
  for (let i: number = 0; i < p1.length; i++) {
    result[i] = p1[i] + p2[i];
  }
  return result;
}

/**
 * Restar las coordenadas de dos puntos
 * @param p1 Punto 1 a restar
 * @param p2 Punto 2 a restar
 * @returns Resta de ambos puntos
 */
export function resta(p1: PuntoNdim, p2: PuntoNdim): PuntoNdim|string {
  let result: PuntoNdim = [0, 0, 0];
  if (p1.length != p2.length) {
    return 'Los puntos no son compatibles';
  }
  for (let i: number = 0; i < p1.length; i++) {
    result[i] = p1[i] - p2[i];
  }
  return result;
}

/**
 * Multiplicar un punto por un valor
 * @param p1 Punto a ser multiplicado
 * @param num Valor por el que será multiplicado
 * @returns Punto multiplicado
 */
export function producto(p1: PuntoNdim, num: number): PuntoNdim {
  let result: PuntoNdim = [0, 0, 0];
  let index: number = 0;
  for (let valor of p1) {
    result[index] = valor * num;
    index++;
  }
  return result;
}

/**
 * Calcular la distancia entre dos puntos
 * @param p1 Punto numero 1
 * @param p2 Punto numero 2
 * @returns Distancia entre ambos puntos
 */
export function distancia(p1: PuntoNdim, p2: PuntoNdim): number|string {
  let result: number = 0;
  if (p1.length != p2.length) {
    return 'Los puntos no son compatibles';
  }
  for (let i: number = 0; i < p1.length; i++) {
    result += Math.pow(p1[i] - p2[i], 2);
  }
  result = Math.sqrt(result);
  result = parseFloat(result.toFixed(4));
  return result;
}

// console.log(suma([4, 2], [1, 3]));
// console.log(resta([4, 2], [1, 3]));
// console.log(producto([4, 2], 2));
// console.log(distancia([6, 6, 2], [5, 2, 3]));