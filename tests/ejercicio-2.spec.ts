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