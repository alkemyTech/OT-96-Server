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

module.exports.isOwnership = async (req, res, next) => {
    try {
        const { id } = req.params;
        const token = req.headers['authorization'];

        if (!token) {
            res.status(403).json({ message: 'No token provided' });
            return;
        }

        const userId = securityService.verifyToken(token).id;
        if(!userId) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const user = await usersService.getById(userId);
        if (!character) {
            res.status(404).json({ message: 'no user found' });
            return;
        }

        if (user.roleId === 1) {
            next();
        }

        if (id === user.id) {
            next();
        }

        res.status(403).json({ message: 'Forbidden' });
    } catch (error) {
        next(error);
    }
}