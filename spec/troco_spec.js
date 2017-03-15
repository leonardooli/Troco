const troco = require('../lib/troco');

describe('Troco', () => {
  describe('getDifference', () => {
    it('deve retornar notas de 10', () =>{
      expect(troco.getDifference(10)).toEqual([10])
    });
