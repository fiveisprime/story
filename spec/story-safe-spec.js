var expect = require('chai').expect
  , story = require('../')(true);

describe('safe', function() {

  it('should return `format` method on initialization', function() {
    expect(typeof story).to.equal('function');
  });

  it('should correctly format a string', function() {
    expect(story('{0}', 'test')).to.equal('test');
  });

  it('should correctly format a string with multiple formats', function() {
    expect(story('{0} {1} {2}', 'test', 'object', 'text')).to.equal('test object text');
  });

  it('should correctly format numbers to strings', function() {
    expect(story('{0}', 0)).to.equal('0');
  });

  it('should correctly call toString on objects', function() {
    var test = { name: 'test object', toString: function() { return this.name; }};

    expect(story('{0}', test)).to.equal('test object');
  });

});
