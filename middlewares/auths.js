const securityService = require('../services/security');
const usersService = require('../services/users')

module.exports.isAdmin = async (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) {
        res.status(403).json({ message: 'No token provided' });
        return;
    }
    
    const userId = securityService.verifyToken(token).id;
    const user = usersService.getById(userId);

    if (user.roleId !== 1) {
        req.status(403).json({ message: 'Require Admin role' });
        return;
    }
    next();
}