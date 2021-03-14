/**
 * Comprobamos que las cadenas que estan encadenadas. Es decir, la palabra
 * siguiente debe empezar por las mismas letras por las que acaba la anterior.
 * @param cadena Array de palabras
 * @return Cadena que, si estan encadenadas, devuelve qué letras hacen la 
 * encadenacion. Si no están encadenadas devuelve un mensaje de error.
 */
export function meshArray(cadena: string[]): string {
  let result: string = '';
  for (let iter: number = 0; iter < cadena.length - 1; iter++) {
    let num: number = cadena[iter+1].indexOf(cadena[iter].
        charAt(cadena[iter].length-1));
    // console.log(num);
    let cad1: number = cadena[iter].length - 1;
    let subcadena: string = cadena[iter + 1].substr(0, num + 1);
    result += subcadena;
    for (let i: number = num; i >= 0; i--) {
      if (cadena[iter].charAt(cad1) === cadena[iter+1].charAt(i)) {
        cad1--;
      } else {
        return "Error al encadenar";
      }
    }
  }
  return result;
}

// let entrada: string[] = ["allow", "lowering", "ringmaster", "terror"];
// console.log(meshArray(entrada));