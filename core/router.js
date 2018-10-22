const path = require('path');

class Router {
    constructor(routes) {
        for (let key in routes) {
            this.routes[key] = require(path.join(__dirname, '..', 'pages', routes[key]));
        }
    }

    go(rout, res) {
        this.routes[rout](res);
    }
}

module.exports = Router;