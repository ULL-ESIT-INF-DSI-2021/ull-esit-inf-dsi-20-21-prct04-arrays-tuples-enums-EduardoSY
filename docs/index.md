# Práctica 4 - Arrays, tuplas y enumerados
* Elaborado por Eduardo Da Silva Yanes

## 1. Introducción
Para esta cuarta práctica vamos a programar algo más complejo en Typescript. En este caso se nos proponen una serie de ejercicios que debemos resolver haciendo uso de
arrays, tuplas y enumerables. Todos los ejercicios los tenemos en el **[Enunciado de la Practica 3](https://ull-esit-inf-dsi-2021.github.io/prct04-arrays-tuples-enums/)**
Además de esto, comenzaremos a trabajar con la generación de documentación con Typedoc y desarrollo dirigido por pruebas (TDD). 

## 2. Pasos previos


## 3. Ejercicios

### 3.1 Decodificar resistencias
_[Acceso al código fuente]()_

Este ejercicio consiste en traducir el código de colores de las resistencias a un valor numérico. Cada color tiene un valor asignado según un estándar. Independientemente de la cantidad de colores que nos digan solo tendremos en cuenta los dos primeros.

```typescript
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
```

Cremos una primera función, **standard**, cuya función es simplemente analizar el color que recibe como entrada y transformarlo a un número.
La función principal es, en este caso, **decodeResisto**. Separamos los colores que nos pasan en la cadena \"colores\" gracias a que deben ir separados por un guion.
Cada uno de los dos primeros colores lo pasamos a la funcion **standard** y guardamos el resultado en un string. Cuando hemos analizado los dos colores devolvemos ese string pasandolo a número aplicandole el +.

### 3.2 Palabras encadenadas en un array
_[Acceso al código fuente]()_

Dado un array de palabras, debemos comprobar si un estas palabras están encadenadas o no. Eso quiere decir que el final de una palabra debe coincidir con el inicio de la siguiente. Para que se consideren encadenadas debe haber al menos una letra. Si todas están encadenadas debemos devolver un array con todas las coincidencias que hacen que estén encadenadas. En caso de que no estén encadenadas debemos devolver un mensaje de error.

Ejemplo de palabras encadenadas: aguaca**te** - **te**lefo**no** - **no**v**ato** - **ato**rmentar
Ejemplo de palabras NO encadenadas: pistacho - champán

```typescript
export function meshArray(cadena: string[]): string {
  let result: string = '';
  for (let iter: number = 0; iter < cadena.length - 1; iter++) {
    let num: number = cadena[iter+1].indexOf(cadena[iter].
        charAt(cadena[iter].length-1));
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
```
Para hacer la explicación más sencilla vamos a utilizar dos palabras unicamente: palabra 1 y palabra2. La palabra 1 va antes que la 2. Por lo tanto el final de la palabra 1 debe coincidir con el inicio de la segunda.

Lo primero es buscar la primera coincidencia de la ultima letra de la **palabra1** en la **palabra2**. Con esto logramos saber dónde acabará la coincidencia. Desde ese punto hacia el inicio de la palabra2 vamos comparando caracter a caracter. 

Si todos coinciden quiere decir que ambas palabras están encadenadas. Entonces guardamos la coincidencia en un string y pasamos a analizar el siguiente par.

En caso de que no estén encadenadas vamos a devolver un mensaje de error.
