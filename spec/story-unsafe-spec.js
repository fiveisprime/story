require('../')();

describe('unsafe', function() {

  it('should attach `format` method to String', function() {
    expect(String.format).toBeDefined();
    expect(typeof String.format).toEqual('function');
  });

  it('should correctly format a string', function() {
    expect(String.format('{0}', 'test')).toEqual('test');
  });

});
