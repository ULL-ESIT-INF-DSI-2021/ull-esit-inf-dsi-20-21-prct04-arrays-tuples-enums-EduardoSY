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