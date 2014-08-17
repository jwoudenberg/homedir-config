# homedir-config

Persistent configuration in a homedir config file.

Install it from npm.

    npm install homedir-config

## Usage

The code below will create a new HomedirConfig instance, that saves and loads
its configuration from `~/my-config.json`:

    var HomedirConfig = require('homedir-config');
    var config = new HomedirConfig('my-config');

Now you can get and set keys from the configuration file:

    config.set('foo', 'bar');
    var result = config.get('foo');
    console.log(result);  //-> 'bar'

That's it!
