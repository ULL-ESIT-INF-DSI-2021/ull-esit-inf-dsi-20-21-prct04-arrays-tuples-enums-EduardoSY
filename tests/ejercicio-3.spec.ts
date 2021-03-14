import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-3';

describe('meanAndConcatenate function tests', () => {
  it('meanAndConcatenate([6, d, 1, i, w, 3, s]) returns [3.33, diws]', () => {
    expect(meanAndConcatenate(
        [6, 'd', 1, 'i', 'w', 3, 's'])).to.deep.equal([3.33, 'diws']);
  });
});