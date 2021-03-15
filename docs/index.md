# Práctica 4 - Arrays, tuplas y enumerados
* Elaborado por Eduardo Da Silva Yanes

## 1. Introducción
Para esta cuarta práctica vamos a programar algo más complejo en Typescript. En este caso se nos proponen una serie de ejercicios que debemos resolver haciendo uso de
arrays, tuplas y enumerables. Todos los ejercicios los tenemos en el **[Enunciado de la Practica 3](https://ull-esit-inf-dsi-2021.github.io/prct04-arrays-tuples-enums/)**
Además de esto, comenzaremos a trabajar con la generación de documentación con Typedoc y desarrollo dirigido por pruebas (TDD). 

## NOTA ACLARATORIA
En este informe no están los comentarios necesarios para generar documentación a partir del código fuente con Typedoc. Esto lo he hecho para así tener un informe menos extenso, más limpio y con un código menos engorroso. Si quieres ver los comentarios utilizados para Typedoc puedes acceder al código fuente directamente gracias al enlace en cada apartado.

## 2. Pasos previos

Antes de comenzar con los ejercicios debemos saber crear un proyecto. En caso de que no sepamos podemos seguir esta [Guía para crear un proyecto](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html).

Durante esta práctica vamos a utilizar Typedoc. Por lo tanto debemos tenerlo instalado y configurado.
Para instalarlo nos situamos en el directorio raiz de nuestro proyecto y tecleamos:

```bash
...$ npm install --save-dev typedoc
```
Una vez instalado creamos un fichero **typedoc.json** y añadimos las siguientes lineas:

```
{
  "entryPoints": [
    "./src/ejercicio-1.ts",
    "./src/ejercicio-2.ts",
    "./src/ejercicio-3.ts",
    "./src/ejercicio-4.ts",
    "./src/ejercicio-5.ts",
    "./src/ejercicio-6.ts",
    "./src/ejercicio-7.ts",
    "./src/ejercicio-8.ts"
  ],
  "out": "./docum"
}
```
En **entryPoints** ponemos los ficheros a partir de los cuales se generará la documentación, es decir, nuestro código fuente. El **out** ponemos el directorio de salida.
Cuidado con el nombre que le pongamos ya que si, por ejemplo, ponemos **docs** y en nuestro repositorio de Github tenemos un directorio también denominado docs para albergar nuestro informe de GH Pages, al hacer un push sobreescribiremos el que esté en nuestro repo. Es por eso que he decidido llamarlo **docum**.

Por último debemos añadir una linea al apartado de **scripts** de nuestro fichero **package.json**
La linea en cuestión es:

```
"doc": "typedoc"
```
Ahora lo que nos falta es comentar el código. Para ello vamos a seguir las indicaciones que nos da la [Guia de Typedoc](https://typedoc.org/guides/installation/).

Cuando ya tengamos todo comentado podemos ejecutar Typedoc con el siguiente comando:

```bash
...$ npm run doc
```
Aquí tenemos un [tutorial de instalación y configuracion de Typedoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) creado por el profesor de la asignatura. Este enlace es **solo apto para alumno de la ULL**.

Ahora tenemos que instalar Mocha y Chai. Para ello ejecutamos:

```bash
...$ npm install --save-dev mocha chai @types/mocha @types/chai ts-node
```

Ahora debemos crear un directorio para los tests. En nuestro caso se llamará **tests**. También debemos crear un fichero denominado **.mocharc.json**. A este fichero le añadimos
lo siguiente: 

```
{
  "extension": ["ts"],
  "spec": "tests/**/*.spec.ts",
  "require": "ts-node/register"
}
```

Dentro del directorio **tests** iremos creando las pruebas que iremos viendo a continuación. 
En general la estructura de las pruebas es muy parecida. Las siguientes lineas son las que se ponen al principios de los ficheros de pruebas que los denominamos como **ejercicio-X.spec.ts**.

```
import 'mocha';
import {expect} from 'chai';
import {standard} from '../src/ejercicio-1';
```
La tercera linea incluye las funciones. Debemos poner el nombre de la función a importar entre los corchetes seguidos con la ruta del fichero donde se encuentra.

Algo importante a resaltar es que debemos poner **export** antes de nuestras funciones para que estas sean accesibles desde fuera del fichero.

Finalmente, para poder ejecutar las pruebas debemos añadir una linea al apartado de **scripts** de nuestro fichero **package.json**
La linea en cuestión es:

```
 "test": "mocha",
```
Aquí tenemos un [tutorial de instalación y configuración de Mocha y Chai en un proyecto TS](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view) creado por el profesor de la asignatura. Este enlace es **solo apto para alumno de la ULL**.

## 3. Ejercicios

### 3.1 Decodificar resistencias
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-1.ts)_

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

**TESTS REALIZADOS**
```
import 'mocha';
import {expect} from 'chai';
import {standard} from '../src/ejercicio-1';
import {decodeResistor} from '../src/ejercicio-1';

describe('standard function tests', () => {
  it('standard(violeta) returns 7', () => {
    expect(standard('violeta')).to.be.equal(7);
  });
});

describe('decodeResistor function tests', () => {
  it('decodeResistor(violeta) returns 7', () => {
    expect(decodeResistor('violeta')).to.be.equal(7);
  });

  it('decodeResistor(violeta) returns 71', () => {
    expect(decodeResistor('violeta-marron-naranja')).to.be.equal(71);
  });

  it('decodeResistor(violeta) returns 65', () => {
    expect(decodeResistor('azul-verde')).to.be.equal(65);
  });
});
```

### 3.2 Palabras encadenadas en un array
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-2.ts)_

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

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

describe('meshArray function tests', () => {
  it('[allow, lowering, ringmaster, terror] returns lowringter', () => {
    expect(meshArray(["allow", "lowering", "ringmaster", "terror"])).to.deep.
        equal("lowringter");
  });

  it('[allowi, lowering] returns Error al encadenar', () => {
    expect(meshArray(["allowi", "lowering"])).to.deep.
        equal("Error al encadenar");
  });
});
```

### 3.3 Calcular la media y concatenar cadenas
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-3.ts)_

Para este ejercicio vamos a recibir un array con números y caracteres. Debemos devolver, por un lado, un array con el valor numérico de la media entre todos los números de la entrada y, por otro lado, un string que una todos los caracteres de la entrada.

```typescript
export function meanAndConcatenate(cadena: (number|string)[]):
(number|string)[] {
  let nnumbers: number = 0;
  let resultNumber: number = 0;
  let cadenaAux: string = '';
  let resultado: (number|string)[] = [];
  cadena.forEach((item: number | string) => {
    if (typeof item === "number") {
      resultNumber += item;
      nnumbers++;
    } else if (typeof item === "string") {
      cadenaAux += item;
    }
  });

  resultado.push(parseFloat((resultNumber/nnumbers).toFixed(2)));
  resultado.push(cadenaAux);
  return resultado;
}
```

El funcionamiento del código es bastante sencillo. Vamos a analizar cada elemento de la cadena de entrada, que pueden ser tanto tipo **number** como tipo **string**. Entonces comparamos el tipo de dato con **typeof**. En caso de que sea un número iremos acumulando la suma en una variable así como contando cuantos número hay para así poder calcular la media. Si por el contrario se trata de un string, lo que haremos es ir añadiendo caracteres aun string donde guardamos el resultado. Finalmente hacemos un push a un string que devolveremos donde primero guardamos el valor de la media y luego la cadena de todos los caracteres juntos.

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-3';

describe('meanAndConcatenate function tests', () => {
  it('meanAndConcatenate([6, d, 1, i, w, 3, s]) returns [3.33, diws]', () => {
    expect(meanAndConcatenate(
        [6, 'd', 1, 'i', 'w', 3, 's'])).to.deep.equal([3.33, 'diws']);
  });
});
```

### 3.4 Mover los ceros al final
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-4.ts)_

Dado un array de números, debemos mover TODOS los ceros al final sin alterar el orden de los demás números.
```typescript
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
```

El algoritmo para la implementación es muy sencillo. Vamos a recorrer el array de números que recibimos como entrada. Si el valor es un 0, cogemos el índice de la posición, eliminamos esa posición de array y sumamos uno al contador de ceros. Al eliminar esa posición no modifico el orden de de los demás elementos. 

Una vez he recorrido todo el array tengo almacenado en la variable **contador** cuántos ceros habian en el array. Por tanto, hago tantos push como ceros habían. Con esto consigo que todos los ceros estén al final del array.

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('moveZeros function tests', () => {
  it('Mover de [1, 0, 1, 2, 0, 1, 3] a [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros(
        [1, 0, 1, 2, 0, 1, 3])).to.deep.equal([1, 1, 2, 1, 3, 0, 0]);
  });

  it('Mover de [1, 5, 6] a [1, 5, 6]', () => {
    expect(moveZeros(
        [1, 5, 6])).to.deep.equal([1, 5, 6]);
  });
});
```

### 3.5 Factoría de multiplicaciones
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-5.ts)_

Este ejercicio es sencillo pero tiene una ligera complicación. La idea es tener un array de números como parámetro y multiplicar cada elemento de ese array por un número también pasado como parámetro. El caso es que estos parámetros no están dentro de la misma función sino que deben llamarse de la siguiente manera: 

```
multiplyAll([2, 6, 8])(3)
```

He ahí donde está la complicación. 

```typescript
export function multiplyAll(numeros: number[]) {
  return function(num: number): number[] {
    let result: number[] = [];
    for (let valor of numeros) {
      result.push(valor * num);
    }
    return result;
  };
};
```

Para poder llamar a una función tal cual hemos dicho antes debemos hacer que el return de la primera función sea otra función. Entonces, dentro de **multiplyAll**, en el return
ponemos una función que reciba y número y lo que haga sea simplemente recorrer cada elemento del array de entrada de **multiplyAll**. Vamos almacenando estos elementos en un nuevo array y una vez hemos multiplicado todo podemos devolverlo.

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';

describe('multiplyAll function tests', () => {
  it('Multiplicar de [3, 2, 1] por 3', () => {
    expect(multiplyAll([3, 2, 1])(3)).to.deep.equal([9, 6, 3]);
  });

  it('Multiplicar de [1, 5, 6] por 0', () => {
    expect(multiplyAll([1, 5, 6])(0)).to.deep.equal([0, 0, 0]);
  });
});
```

### 3.6 Puntos bi-dimensionales
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-6.ts)_

Debemos crear un tipo de dato que nos permite representar un punto bidimensional, es decir, que tenga coordenadas X e Y.

```typescript
type Punto = [number, number];

export function suma(p1: Punto, p2: Punto): Punto {
  return [p1[0] + p2[0], p1[1] + p2[1]];
}

export function resta(p1: Punto, p2: Punto): Punto {
  return [p1[0] - p2[0], p1[1] - p2[1]];
}

export function producto(p1: Punto, num: number): Punto {
  return [p1[0] * num, p1[1] * num];
}

export function distancia(p1: Punto, p2: Punto): number {
  return parseFloat(Math.sqrt(Math.pow(p1[0] - p2 [0], 2) +
  Math.pow(p1[1] - p2 [1], 2)).toFixed(4));
}
```

Para declarar el tipo de hacemos uso de **type**. En nuestro caso declaramos un **Punto** que estará formado por dos numbers.
Con esto ya podemos definir para cada una de nuestras funciones que los parámetros serán de tipo Punto.

La primera función es la suma, que recibe dos puntos y devuelve un tercer punto como resultado.
La operación se suma se hace sumando componente a componente ambos puntos.

La segunda función es la resta, que recibe dos puntos y devuelve un tercer punto como resultado.
La operación se resta se hace calculando la diferencia componente a componente entre ambos puntos.

La tercera función es el producto, que recibe un punto y un número y devuelve un tercer punto como resultado.
La operación se hace simplemente multiplicando cada componente del punto por un número.

La cuarta y última función es la distancia Euclídea, que recibe dos puntos y devuelve un número como resultado.
La fórmula para calcularla es:
La raiz cuadrada de la suma de las diferencias de sus componentes al cuadrado. Es decir: sqrt((p1[0] - p2[0])^2 + (p1[1] - p2[1])^2)

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-6';
import {resta} from '../src/ejercicio-6';
import {producto} from '../src/ejercicio-6';
import {distancia} from '../src/ejercicio-6';

describe('Ejer 6 suma function tests', () => {
  it('Sumar [4, 2] con [1, 3]', () => {
    expect(suma([4, 2], [1, 3])).to.deep.equal([5, 5]);
  });
});

describe('Ejer 6 resta function tests', () => {
  it('Restar [7, 4] con [1, 5]', () => {
    expect(resta([7, 4], [1, 5])).to.deep.equal([6, -1]);
  });
});

describe('Ejer 6 multiplicar function tests', () => {
  it('Multiplicar [6, 5] con 5', () => {
    expect(producto([6, 5], 5)).to.deep.equal([30, 25]);
  });
});

describe('Ejer 6 distancia function tests', () => {
  it('Distancia entre [4, 6] con [1, 5]', () => {
    expect(distancia([4, 6], [1, 5])).to.deep.equal(3.1623);
  });
});
```

### 3.7 Puntos n-dimensionales
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-7.ts)_

Este ejercicio es igual al anterior con la excepción de que en este caso no tratamos con puntos de dos dimensiones, es decir, con coordenadas X e Y, sino que pueden tener 3, 4, 10, 1000 componentes.
Para hacer las operaciones en este caso debemos tener en cuenta de que, en caso de tratar dos puntos, ambos deben tener la misma dimensión. Por ejemplo, un punto de 5 dimensiones puede sumarse con otro punto de 5 dimensiones pero no con un punto de 6 dimensiones.

```typescript
type PuntoNdim = [number, number, number, ...number[]];

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

export function producto(p1: PuntoNdim, num: number): PuntoNdim {
  let result: PuntoNdim = [0, 0, 0];
  let index: number = 0;
  for (let valor of p1) {
    result[index] = valor * num;
    index++;
  }
  return result;
}

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
```

Para definir los puntos ndimensionales volvemos a hacer uso de **type**. En este caso especificamos que los tres primeros componentes sean de tipo number. Con esto nos aseguramos que los puntos de N dimensiones tengan, como minimo, 3 dimensiones.
Para hacer que puedan tener más componentes ponemos **...number[]**.

La forma de trabajar las operaciones es exactamente a la descrita en el apartado 3.7 con la única diferencia de que ahora comprobamos que ambos puntos sean de las mismas dimensiones. Esto lo hacemos comprobando su longitud. Si la longitud de ambos coincide quiere decir que tienen la misma cantidad de componentes y, por tanto, las mismas dimensiones.

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-7';
import {resta} from '../src/ejercicio-7';
import {producto} from '../src/ejercicio-7';
import {distancia} from '../src/ejercicio-7';

describe('Ejer 7 suma function tests', () => {
  it('Sumar [6, 6, 2] con [5, 2, 3]', () => {
    expect(suma([6, 6, 2], [5, 2, 3])).to.deep.equal([11, 8, 5]);
  });

  it('Sumar [6, 6, 2, 1] con [5, 2, 3, 1]', () => {
    expect(suma([6, 6, 2, 1], [5, 2, 3, 1])).to.deep.equal([11, 8, 5, 2]);
  });
});

describe('Ejer 7 resta function tests', () => {
  it('Restar [6, 6, 2] con [5, 2, 3]', () => {
    expect(resta([6, 6, 2], [5, 2, 3])).to.deep.equal([1, 4, -1]);
  });
});

describe('Ejer 7 multiplicar function tests', () => {
  it('Multiplicar [6, 5, 3] con 5', () => {
    expect(producto([6, 5, 3], 5)).to.deep.equal([30, 25, 15]);
  });
});

describe('Ejer 7 distancia function tests', () => {
  it('Distancia entre [6, 6, 2] con [5, 2, 3]', () => {
    expect(distancia([6, 6, 2], [5, 2, 3])).to.deep.equal(4.2426);
  });
});
```

### 3.8 El agente
_[Acceso al código fuente](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-EduardoSY/blob/master/src/ejercicio-8.ts)_

Tenemos un tablero de determinadas dimensiones. El objetivo es que, dado un punto de inicio y un punto final, encontrar un camino que una ambos, almacenando en un vector las coordenadas de los movimientos realizados.

```typescript
type Punto = [number, number];

export function agent(X: number, Y: number, inicio: Punto, fin: Punto):
string[] {
  let recorrido: string[] = [];
  if ((inicio[0] >= X) || (inicio[1] >= Y) || (fin[0] >= X) || (fin[1] >= Y)) {
    recorrido.push('Fuera de los limites');
    return recorrido;
  }
  let moving: Punto = [inicio[0], inicio[1]];
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
```

Lo primero que hacemos es definir un punto. Este es el tipo que usaremos para representar tanto el punto de inicio como el punto final.

La función **agent**, que será la que haga el recorrido, recibe como parámetro las dimensiones X e Y del tablero y los puntos de inicio y final.
Lo primero que vamos a comprobar es que los puntos formen parte del tablero y no estén fuera de este. Si se salen de las dimensiones devolvemos el vector de resultado con un mensaje que pone **Fuera de los limites**.

En caso de que los puntos estén dentro del tablero haremos lo siguiente:
Hacemos una copia del punto de inicio. Esta copia será la que vayamos moviendo por el tablero.
Entonces, hasta que el punto que vamos moviendo no se encuentre en la posición del final, vamos comparando las componentes de estos dos puntos.

Dependiendo de hacia donde sea el movimiento lo tomamos como positivo o negativo. Si el movimiento es positivo respecto al eje de las X o Y, es decir, Este o Norte, sumamos 1 al valor que corresponda según el eje. Si por el contrario el movimiento es negativo respecto a alguno de estos ejes, es decir, un movimiento hacia el Oeste o el Sur, restamos 1.

Por cada movimiento que hagamos realizamos un **push** a un vector de string, donde iremos almacenando el recorrido.
Una vez llegamos al final devolvemos ese vector.

**TESTS REALIZADOS**
``` 
import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('agent function tests', () => {
  it('Tablero 6x6. Inicio = (1,3) Fin = (3,5) returns Este, Norte, Este, Norte'
      , () => {
        expect(agent(6, 6, [1, 3], [3, 5])).to.deep.
            equal(["Este", "Norte", "Este", "Norte"]);
      });

  it('Tablero 6x6. Inicio = (6,3) Fin = (3,5) returns Fuera de los limites'
      , () => {
        expect(agent(6, 6, [6, 3], [3, 5])).to.deep.
            equal(["Fuera de los limites"]);
      });
});
```

## 4. Conclusión
Este tipo de prácticas donde se nos proponen varios ejercicios que no ocupan muchas lineas me parecen muy amenos a la par que útiles. Podemos tratar diversos temas en una misma práctica pero sin resultar tedioso ya que cada ejercicio nos plantea algo diferente.

En este caso no he tenido muchos problemas. Lo más destacable es que he tenido ciertas dudas a la hora de cómo implementar los puntos en los tres últimos ejercicios pero más allá de eso todo ha ido bien.

Además de practicar más Typescript hemos aprendido a hacer pruebas unitarias y cómo generar documentación a partir de nuestro código fuente. 

## 5. Referencias y webgrafía
- [Guión práctica 4](https://ull-esit-inf-dsi-2021.github.io/prct04-arrays-tuples-enums/): Guión de la práctica .
- [Guía para crear un proyecto](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html): Guía del profesor para crear un proyecto.
- [Tutorial de instalación y configuracion Typedoc (Solo alumnos ULL)](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view): Tutorial creado por el profesor sobre cómo instalar, configurar y utilizar Typedoc.
- [Tutorial de instalación y configuración de Mocha y Chai en un proyecto TS (Solo alumnos ULL)](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view): Tutorial creado por el profesor sobre cómo instalar, configurar y utilizar Mocha y Chai.
- [Apuntes sobre arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-arrays-tuples-enums.html): Apuntes creados por el profesor sobre arrays, tuplas y enumerables.
- [Guia de Typedoc](https://typedoc.org/guides/installation/): Guia oficial de Typedoc
