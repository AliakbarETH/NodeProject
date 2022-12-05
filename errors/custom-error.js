class customAPIError extends Error{
    constructor(messgae, statusCode)
    {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
     return new customAPIError(msg, statusCode)
}

module.exports = {createCustomError, customAPIError}