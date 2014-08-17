var assert = require('assert');
var HomeConfig = require('../');
var CONFIG_FILE_NAME = 'homedir-config-test';

var config = new HomeConfig(CONFIG_FILE_NAME);

config.set('foo', 'bar');
var result = config.get('foo');
assert.equal(result, 'bar');

//We reached the end, so everything succeeded.
console.log('All tests succeeded!');
