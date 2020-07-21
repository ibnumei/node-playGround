const error = require('http-errors');

const { NotFound } = error;

class PagingNotFound extends NotFound {
    constructor() {
        super(`data tidak ditemukan`);
    }
}

module.exports = PagingNotFound;
