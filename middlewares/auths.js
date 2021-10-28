const authsService = require('../services/auths');
const usersService = require('../services/users')

module.exports.isAdmin = async (req, res, next) => {

    const userId = authsService.verifyToken();
    const user = usersService.getById(userId);

    if (user.roleId !== 1) {
        req.status(403).json({ message: 'Require Admin role' });
        return;
    }
    next();
}