const createError = require('http-errors');

const handleError = (handler) => async (res, req, next) => {
    try {
        await handler(res, req, next);
    } catch (error) {
        next(createError(error.statusCode, error.message));
    }
};

module.exports = { handleError };
