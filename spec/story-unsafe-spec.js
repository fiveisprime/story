require('../')();

require('should');

describe('unsafe', function() {

  it('should attach `format` method to String', function() {
    (typeof String.format).should.equal('function');
  });

  it('should correctly format a string', function() {
    String.format('{0}', 'test').should.equal('test');
  });

  it('should correctly format a string with multiple formats', function() {
    String.format('{0} {1} {2}', 'test', 'object', 'text').should.equal('test object text');
  });

  it('should correctly format numbers to strings', function() {
    String.format('{0}', 0).should.equal('0');
  });

  it('should correctly call toString on objects', function() {
    var test = { name: 'test object', toString: function() { return this.name; }};

    String.format('{0}', test).should.equal('test object');
  });

});
