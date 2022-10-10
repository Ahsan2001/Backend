// Error Handler Class
class ErrorHandler extends Error {
    constructor(message) {
        super(message);
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler;