const createDB = require('../core/db.js');

const articles = createDB('articles');

module.exports = function (res) {
    articles.getAll().forEach(({text}) => {res.write(`<div>${text}</div>`)});
};