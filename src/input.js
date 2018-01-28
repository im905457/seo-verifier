const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const loadDom = (source) => {
    if (typeof source == "string") {
        if (source.endsWith(".html")) {
            return domFromFile(source);
        }else if (source.startsWith("http")) {
            return domFromUrl(source);
        }
        return domFromString(source);
    }else {
        return Promise.reject({status: false, message: "source is not supported." });
    }
};

const domFromUrl = (source) => {
    return new Promise(function (resolve, reject) {
        request.get(source.toLowerCase(), function(error, response, data) {
            if (!error && response.statusCode === 200) resolve(buildDom(data));
            else reject({status: false, message: error });
        })
    });
};

const domFromString = (source) => {
    return Promise.resolve(buildDom(source));
};

const domFromFile = (filepath) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, "utf-8", (error, data) => {
            if (error) reject({status: false, message: error });
            else resolve(buildDom(data));
        })
    });
};

const buildDom = (data) => {
    return cheerio.load(data.toLowerCase());
};

module.exports = loadDom;