let jwt = require("jsonwebtoken")

let tokenVerify = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({
                message: "token is Balnk"
            });
        }
        let doneToken = token.split(' ')[1];
        jwt.verify(doneToken, "examAuth", (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: "token is not valid"
                })
            }
            req.user = decoded;
            console.log(req.user);
            next()
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { tokenVerify }