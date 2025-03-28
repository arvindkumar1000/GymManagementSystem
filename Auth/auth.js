const Gym = require('../Modals/gym');
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {

    try {
        const token = req.cookies.cookie_token;
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' })
        }

        const decode = jwt.compare(token, process.env.JWT_SecrateKey)
    } catch (err) {
        res.status(401).json({ error: 'Token is not valid' });
    }

}

module.exports = auth;