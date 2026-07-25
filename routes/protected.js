const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const authMiddleware = require("../middleware/auth");

const SECRET_KEY = "mysecretkey";

// Login Route (Generate Token)

router.post("/login", (req, res) => {

    const user = {
        id: 1,
        username: "Akansha"
    };

    const token = jwt.sign(user, SECRET_KEY, {
        expiresIn: "1h"
    });

    res.json({
        token
    });

});

// Protected Route

router.get("/protected", authMiddleware, (req, res) => {

    res.json({
        message: "Protected Resource Accessed Successfully",
        user: req.user
    });

});

module.exports = router;