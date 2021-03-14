import 'mocha';
import {expect} from 'chai';
import {standard} from '../src/ejercicio-1';

describe('standard function tests', () => {
  it('standard(violeta) returns 7', () => {
    expect(standard('violeta')).to.be.equal(7);
  });
});