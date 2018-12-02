describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")   ,  "HIJKLMNOPQRSTUVWXYZABCDEFG"    );
    });
    it('debería retornar " " para " " con offest 33', () => {
      assert.equal(cipher.encode(33, " ") , " ");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcde" para "abcdefghijklmnopqrstuvwxyz" con offest 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz") , "hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "123456789" para "123456789" con offest 33', () => {
      assert.equal(cipher.encode(33, "123456789") , "123456789");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG")   ,   "ABCDEFGHIJKLMNOPQRSTUVWXYZ"   );
    });
    it('debería retornar " " para " " con offest 33', () => {
      assert.equal(cipher.decode(33, " ") , " ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
        assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg") , "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "123456789" para "123456789" con offest 33', () => {
      assert.equal(cipher.decode(33, "123456789") , "123456789");
    });
  });

});
