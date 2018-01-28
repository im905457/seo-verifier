# seo verifier

checking basic SEO on a web page or html file.

## Installation

Using the npm install command

```
npm install seo-verifier --save
```

## Example

### Basic

parsing a html file or url, test result will output to console or save in local storage.

```
const seoVerifier = require("seo-verifier");

seoVerifier.title('./test.html');
seoVerifier.title('https://www.google.com.tw/');   
```

### Defined rules

```
const options = {
    source: './test.html',
    property: 'description'
}
seoVerifier.meta(options);                      
```

```
const options = {
    source: './test.html',
    tag: 'strong',
    comparer: 15
}
seoVerifier.tag(options);                     
```

```
const options = {
    source: './test.html',
    tag: 'img',
    attribute: 'alt'
}
seoVerifier.tagWithAttribute(options);           
```

### Response

```
{ status: false, message: 'there is no description.' }
{ status: false, message: 'thers are 1 < img > tag without alt attribute.' }
{ status: true, message: 'there is 6 < strong > tag.' }                   
```