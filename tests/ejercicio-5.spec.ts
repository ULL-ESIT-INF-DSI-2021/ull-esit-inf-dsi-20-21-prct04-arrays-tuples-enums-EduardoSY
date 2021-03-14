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