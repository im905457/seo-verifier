//const seoVerifier = require('./../src/index.js');
const seoVerifier = require('seo-verifier');
var options = {};

seoVerifier.title('https://tv.pbplus.me', console);
seoVerifier.title('./test.html', 'test');
seoVerifier.title('./test.html', function(title) {
    console.log(title);
});

options = {
    source: './test.html',
    property: 'description'
}
seoVerifier.meta(options);

options = {
    source: './test.html',
    property: 'keywords'
}
seoVerifier.meta(options); 

options = {
    source: './test.html',
    tag: 'h1',
    comparer: 2
}
seoVerifier.tag(options);

options = {
    source: './test.html',
    tag: 'strong',
    comparer: 15
}
seoVerifier.tag(options);


options = {
    source: './test.html',
    tag: 'img',
    attribute: 'alt'
}
seoVerifier.tagWithAttribute(options);

options = {
    source: './test.html',
    tag: 'a',
    attribute: 'rel'
}
seoVerifier.tagWithAttribute(options);
