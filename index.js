/**
 * Created by MetaDriver on 20.08.2015.
 */

var Po = require('pofile');
var gutil = require('gulp-util');
var through = require('through2');

var test = function() {
    console.log('Yeaassss !!');
    return through;
};

module.exports = test;