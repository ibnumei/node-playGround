// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log('gagal: ', err);
    // render the error page
    res.status(err.statusCode).json({
        statusCode: err.statusCode || 500,
        message: err.message
    });
};

module.exports = { errorMiddleware };
