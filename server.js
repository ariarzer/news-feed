const http = require('http');
const createDB = require('./core/db.js');
const Router = require('./core/router.js');

const articles = createDB('articles');

const router = new Router({
    '/': 'main.js',
    '/favicon.ico' : 'main.js'
});

const server = new http.Server();

server.on('request', function (req, res) {
    router.go(req.url, res);
    res.end();
});

server.listen(8080);

process.on('SIGINT', function () {
    articles.unmount();
    process.exit();
});