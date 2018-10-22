const http = require('http');
const db = require('./core/db.js');
const Router = require('./core/router.js');

const articles = new db('articles');

const router = new Router({
    '/': 'main.js',
});

const server = new http.Server();

server.on('request', function (req, res) {
    articles.getAll().forEach(({text}) => {res.write(`<div>${text}</div>`)});
    router.go(req.url, res);
    res.end();
});

server.listen(8080);

process.on('SIGINT', function () {
    articles.unmount();
    process.exit();
});