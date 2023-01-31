import {encode, decode, validarDeslocamento} from '../src/cipher.js';

describe('cipher', () => {
  describe('method validate', () => {
    it('should be a sucess', () => {
      expect(validarDeslocamento(1)).toBe(true);
    });
    it('should be a fail', () => {
      expect(validarDeslocamento(NaN)).toBe(false);
    });

  })
  describe('method encode', () => {

    it('should be a function', () => {
      expect(typeof encode).toBe('function');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    
    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof decode).toBe('function');
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

  });

});
