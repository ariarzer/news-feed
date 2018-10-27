const path = require('path');

class Router {
    constructor(routes) {
        this.routes= {};
        for (let key in routes) {
            console.log(key, this.routes[key]);
            this.routes[key] = require(path.join(__dirname, '..', 'pages', routes[key]));
            console.log(this.routes[key]);
        }
    }

    go(rout, res) {
        console.log(rout);
        this.routes[rout](res);
    }
}

module.exports = Router;