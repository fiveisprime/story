var story = require('../')(true);

describe('safe', function() {

  it('should return `format` method on initialization', function() {
    expect(story).toBeDefined();
    expect(typeof story).toEqual('function');
  });

  it('should correctly format a string', function() {
    expect(story('{0}', 'test')).toEqual('test');
  });

});
