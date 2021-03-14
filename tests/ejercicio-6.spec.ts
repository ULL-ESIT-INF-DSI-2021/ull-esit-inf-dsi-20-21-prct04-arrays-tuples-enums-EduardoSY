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