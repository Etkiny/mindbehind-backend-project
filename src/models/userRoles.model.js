'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserRoles = sequelize.define(
        'UserRoles',
        {
            role_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            role_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'User_Roles',
        }
    );
    UserRoles.associate = (models) => {
        UserRoles.hasMany(models.Users, {
            foreignKey: 'role_id',
            as: 'users',
        });
    };
    return UserRoles;
};
