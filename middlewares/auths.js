const securityService = require('../services/security');
const usersService = require('../services/users')

module.exports.isAdmin = async (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) {
        res.status(403).json({ message: 'No token provided' });
        return;
    }
    
    const userId = securityService.verifyToken(token).id;
    if(!userId) {
        res.status(401).json({ message: 'Unauthorized' });
    }

    const user = usersService.getById(userId);
    if (!character) {
        res.status(404).json({ message: 'no user found' });
        return;
      }

    if (user.roleId !== 1) {
        req.status(403).json({ message: 'Require Admin role' });
        return;
    }
    next();
}