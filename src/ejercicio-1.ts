/**
 * Asigna un valor numerico a un color
 * @param color Color de la resistencia
 * @returns Valor que corresponde al color
 */

export function standard(color: string): number {
  color = color.toLowerCase();
  let result: number = 0;
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

/**
 * Dado los colores de una resistencia obtenemos su correspondiente
 * valor numerico.
 * @param colores Colores de entrada de la resistencia separados por guion
 * @returns Valor numerico de la resistencia
 */
export function decodeResistor(colores: string): number {
  let resultadostring: string = '';
  let colors: string[] = colores.split('-');
  if (colors.length == 1) {
    resultadostring += 0;
    resultadostring += standard(colors[0]);
  } else {
    resultadostring += standard(colors[0]);
    resultadostring += standard(colors[1]);
  }
  return +resultadostring;
}

// console.log("Colores: " + decodeResistor('violeta-marron-naranja'));