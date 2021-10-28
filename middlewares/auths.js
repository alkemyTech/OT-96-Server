const authsService = require('../services/auths');
const usersService = require('../services/users')

module.exports.isAdmin = async (req, res, next) => {

    const header = req.headers['authorization'];

    if (typeof header === 'undefined') {
        req.status(403).json({ message: 'header is undefined' });
        return;
    }
    const bearer = header.split(' ');
    const token = bearer[1];

    const userId = authsService.verifyToken(token);
    const user = usersService.getById(userId);

    if (user.roleId !== 1) {
        req.status(403).json({ message: 'Require Admin role' });
        return;
    }
    next();
}