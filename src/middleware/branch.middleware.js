const { Users, UserRoles } = require('../models');

const authorize = (requiredRoleArray) => {
    return async (req, res, next) => {
        try {
            const { userId } = req.query;

            const user = await Users.findByPk(userId, {
                include: { model: UserRoles, as: 'role' },
            });

            if (user && requiredRoleArray.includes(user.role.role_name)) {
                return next();
            } else {
                return res.status(403).json({
                    message: 'Forbidden: You do not have access!',
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    };
};

module.exports = authorize;
