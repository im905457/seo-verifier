const loadDom = require('./input.js');
const rule = require('./rule.js');
const printResult = require('./output.js');

const title = (source, output = null) => {
    loadDom(source).then(dom => {
        return rule.checkTitle(dom);
    }).then(issues => {
        return printResult(issues, output);
    }).catch((error) => {
        return printResult(error, output);
    });
};

const meta = (source, output = null) => {
    loadDom(source.source).then(dom => {
        return rule.checkMeta(dom, source.property);
    }).then(issues => {
        return printResult(issues, output);
    }).catch((error) => {
        return printResult(error, output);
    });
};

const tag = (source, output = null) => {
    loadDom(source.source).then(dom => {
        return rule.checkTag(dom, source.tag, source.comparer);
    }).then(issues => {
        return printResult(issues, output);
    }).catch((error) => {
        return printResult(error, output);
    });
};

const tagWithAttribute = (source, output = null) => {
    loadDom(source.source).then(dom => {
        return rule.checkTagWithAttribute(dom, source.tag, source.attribute);
    }).then(issues => {
        return printResult(issues, output);
    }).catch((error) => {
        return printResult(error, output);
    });
};

module.exports = { title: title, meta: meta, tag: tag, tagWithAttribute: tagWithAttribute };
