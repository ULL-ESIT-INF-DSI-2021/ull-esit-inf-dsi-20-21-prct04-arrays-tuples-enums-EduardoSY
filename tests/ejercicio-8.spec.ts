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