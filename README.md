# homedir-config
[![wercker status](https://app.wercker.com/status/c0dd1f9acce3460128f4ebc66e9bdec5/s/master "wercker status")](https://app.wercker.com/project/bykey/c0dd1f9acce3460128f4ebc66e9bdec5)
[![NPM
version](https://badge.fury.io/js/virgilio-action-cache.svg)](http://badge.fury.io/js/homedir-config)

Persistent configuration in a homedir config file.

Install it from npm.

    npm install homedir-config

## Usage

The code below will create a new HomedirConfig instance, that saves and loads
its configuration from `~/my-config.json`:

```node
var HomedirConfig = require('homedir-config');
var config = new HomedirConfig('my-config');
```

Now you can get and set keys from the configuration file:

```node
config.set('foo', 'bar');
var result = config.get('foo');
console.log(result);  //-> 'bar'
```

That's it!
