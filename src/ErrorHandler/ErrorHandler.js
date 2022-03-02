const winston = require('./Winston');

const ErrorHanlder = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'edevelo'
};

module.exports = ErrorHanlder;