const test = require('tape');
const seoVerifier = require('./../src/index.js');
const checkTitle = function (source) {
    return new Promise(function (resolve, reject) {
        resolve( seoVerifier.title(source) );
    });
};

test('check title', function (t) {
    t.plan(1);

    checkTitle('./demo/test.html').then(title => {
        t.pass('check title pass');
    }).catch((error) => {
        t.fail(error);
    });
});

