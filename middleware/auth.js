const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token missing"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, SECRET_KEY);

        req.user = decoded;

        next();        //req reaches the protected route if the token is valid

    } catch (err) {

        return res.status(401).json({   //verification fails if the token is invalid or expired
            message: "Invalid Token"
        });

    }

};

module.exports = authMiddleware;