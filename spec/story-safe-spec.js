var story = require('../')(true);

describe('safe', function() {

  it('should return `format` method on initialization', function() {
    (typeof story).should.equal('function');
  });

  it('should correctly format a string', function() {
    story('{0}', 'test').should.equal('test');
  });

  it('should correctly format a string with multiple formats', function() {
    story('{0} {1} {2}', 'test', 'object', 'text').should.equal('test object text');
  });

  it('should correctly format numbers to strings', function() {
    story('{0}', 0).should.equal('0');
  });

  it('should correctly call toString on objects', function() {
    var test = { name: 'test object', toString: function() { return this.name; }};

    story('{0}', test).should.equal('test object');
  });

});
