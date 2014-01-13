var assert = require('assert');

var cases = require('./tests.json');
var capitalize = require('../');

cases.forEach(function(testcase) {
    test(testcase.input, function() {
        assert.deepEqual(capitalize(testcase.input), testcase.expect);
    });
});
