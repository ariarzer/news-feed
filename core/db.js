const fs = require('fs');
const path = require('path');

class DB {
    constructor(file) {
        this.file = path.join(__dirname, '/../data/', file + '.json');

        this.data = JSON.parse(fs.readFileSync(this.file));

        this.watcher = fs.watchFile(this.file, () => {
            fs.readFile(this.file, (err, info) => {
                if (err) {
                    throw err;
                }

                this.data = JSON.parse(info);
            })
        })
    }

    getAll() {
        return this.data;
    }

    unmount() {
        fs.unwatchFile(this.file, this.watcher);
    }
}

module.exports = DB;