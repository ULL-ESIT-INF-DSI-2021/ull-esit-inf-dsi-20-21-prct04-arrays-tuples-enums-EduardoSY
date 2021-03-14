/**
 * Mover los ceros de dentro de una cadena de numeros al final
 * @param numeros Cadena de numeros sin modificar
 * @returns Cadena modificada con los ceros al final
 */
export function moveZeros(numeros: number[]):number[] {
  let contador: number = 0;
  numeros.forEach((value, index) => {
    if (value === 0) {
      numeros.splice(index, 1);
      contador++;
    }
  });
  for (contador; contador > 0; contador--) {
    numeros.push(0);
  }
  return numeros;
}

// let entrada4: number[] = [1, 0, 1, 2, 0, 1, 3];

// console.log(moveZeros(entrada4));