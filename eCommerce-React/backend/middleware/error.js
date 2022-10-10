const ErrorHandler = require("../utils/errorHandler");

module.exports  = (err, req, res, next) => {

    // Handling Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message)
    }

    err.message = err.message || "Internal Server Error";
    res.json ({
        success: false,
        error: err.message
    })

}