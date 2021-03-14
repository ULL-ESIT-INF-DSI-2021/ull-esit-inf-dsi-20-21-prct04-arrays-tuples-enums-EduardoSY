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