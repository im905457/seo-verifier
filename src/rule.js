const checkTitle = (dom) => {
    return new Promise(function (resolve, reject) {
        const result = dom("title").text() || null;
        if(!result) reject({status: false, message: "there is no title." });
        else resolve({status: true, message: result });
    });
};

const checkMeta = (dom, property) => {
    return new Promise(function (resolve, reject) {
        if(!property) reject({status: false, message: "meta property is null." });
        const meta = property;
        const metaAttribute = "meta[name=" + meta + "]";
        const result = dom(metaAttribute).attr("content") || null;
        if(!result) reject({status: false, message: `there is no meta ${meta}.`  });
        else resolve({status: true, message: result });
    });
};

const checkTag = (dom, tag, comparer) => {
    return new Promise(function (resolve, reject) {
        if(!tag) reject({status: false, message: "tag name is null." });
        const tagName = tag;
        var totalTags = 0;
        const comparative = comparer || 0;
        dom(tagName).each(function(index) {
            totalTags++;
        });
        if(totalTags > comparative) reject({status: false, message: `< ${tagName} > tag are more than ${comparative}.`  });
        else resolve({status: true, message: `there is ${totalTags} < ${tagName} > tag.` });
    });
};

const checkTagWithAttribute = (dom, tag, attribute) => {
    return new Promise(function (resolve, reject) {
        if(!tag) reject({status: false, message: "tag name is null." });
        else if(!attribute) reject({status: false, message: "attribute name is null." });
        const tagName = tag;
        const tagAttribute = attribute;
        var total = 0;
        var accessible = 0;
        var accessibility = 0;
        dom(tag).each(function() {
            total++;
            if (dom(this).attr(attribute)) accessible++;
        });
        accessibility = total - accessible;
        if(accessibility > 0) reject({status: false, message: `thers are ${accessibility} < ${tagName} > tag without ${tagAttribute} attribute.`  });
        else resolve({status: true, message: `thers are ${total} < ${tagName} > tag and ${accessible} of them with ${tagAttribute} attribute.`  });
    });
};

module.exports = { checkTitle: checkTitle, checkMeta: checkMeta, checkTag: checkTag, checkTagWithAttribute: checkTagWithAttribute };