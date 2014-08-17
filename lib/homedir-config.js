'use strict';
var path = require('path');
var fs = require('fs');

function HomeConfig (fileName) {
    if (!(this instanceof HomeConfig)) {
        return new HomeConfig(fileName);
    }
    var fullFileName = fileName + '.json';
    this._configPath = path.join(process.env.HOME, fullFileName);
}

HomeConfig.prototype.get = function get(key) {
    var config = this._load();
    return config[key];
};

HomeConfig.prototype.set = function set(key, value) {
    var config = this._load();
    config[key] = value;
    this._save(config);
};

HomeConfig.prototype._load = function load() {
    this._ensureConfigFile();
    var config = fs.readFileSync(this._configPath, { encoding: 'utf8' });
    return JSON.parse(config);
};

HomeConfig.prototype._save = function save(config) {
    this._ensureConfigFile();
    var json = JSON.stringify(config);
    fs.writeFileSync(this._configPath, json);
};

HomeConfig.prototype._ensureConfigFile = function ensureConfigFile() {
    if (!fs.existsSync(this._configPath)) {
        fs.writeFileSync(this._configPath, '{}');
    }
};

module.exports = HomeConfig;
