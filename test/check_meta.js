const test = require('tape');
const seoVerifier = require('./../src/index.js');
const checkMeta = function (options) {
    return new Promise(function (resolve, reject) {
        resolve( seoVerifier.meta(options) );
    });
};

test('check meta', function (t) {
    t.plan(2);
    
    var options = {
        source: './demo/test.html',
        property: 'keywords'
    }
    checkMeta('./demo/test.html').then(keywords => {
        t.pass('check keywords pass');
    }).catch((error) => {
        t.fail(error);
    });
    
    options = {
        source: './demo/test.html',
        property: 'description'
    }
    checkMeta('./demo/test.html').then(description => {
        t.pass(description);
    }).catch((error) => {
        t.fail(error);
    });
});


