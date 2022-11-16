const jwt = require('jsonwebtoken');
const errormsg = require('./errors');

module.exports = (req, res, next) => {
    const errors = [];
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        errors.push('Not authenticated. You do not have permission.')
        err = errormsg(errors);
        return res.status(401).json({
            message: "One or more errors occured.",
            error: err
        });
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(authHeader, process.env.SECRET);
    } catch (err) {
        errors.push("Failed to confirm token");
        errors.push(err);
        console.log(errors);
        err = errormsg(errors);
        return res.status(500).json({
            message: "One or more errors occured.",
            error: err
        });
    }
    if (!decodedToken) {
        errors.push("Failed to confirm token");
        errors.push('Not authenticated');
        err = errormsg(errors);
        return res.status(401).json({
            message: "One or more errors occured.",
            error: err
        });
    }
    req.userId = decodedToken.userId;
    
    next();
}