const sanitizeRequest = require("express-sanitize-middleware");

const sanitizeMiddleware = [ sanitizeRequest({
    body: true,
    header: true,
    params: true,
    query: true
})];

module.exports = sanitizeMiddleware;