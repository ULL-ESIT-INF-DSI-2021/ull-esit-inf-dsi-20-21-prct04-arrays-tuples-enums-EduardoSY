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