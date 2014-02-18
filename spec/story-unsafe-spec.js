require('../')();

var expect = require('chai').expect;

describe('unsafe', function() {

  it('should attach `format` method to String', function() {
    expect(typeof String.format).to.equal('function');
  });

  it('should correctly format a string', function() {
    expect(String.format('{0}', 'test')).to.equal('test');
  });

  it('should correctly format a string with multiple formats', function() {
    expect(String.format('{0} {1} {2}', 'test', 'object', 'text')).to.equal('test object text');
  });

  it('should correctly format numbers to strings', function() {
    expect(String.format('{0}', 0)).to.equal('0');
  });

  it('should correctly call toString on objects', function() {
    var test = { name: 'test object', toString: function() { return this.name; }};

    expect(String.format('{0}', test)).to.equal('test object');
  });

});
