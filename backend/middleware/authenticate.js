const jwt = require('jsonwebtoken');

module.exports = function authenticate(req, res, next) {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Failed to authenticate token' });
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    } else {
        res.status(403).json({ message: 'No token provided' });
    }
};