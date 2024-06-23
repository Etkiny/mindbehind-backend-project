'use strict';

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        'Users',
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usernumber: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            timestamps: false,
            tableName: 'Users',
        }
    );
    Users.associate = (models) => {
        Users.belongsTo(models.UserRoles, {
            foreignKey: 'role_id',
            as: 'role',
        });
    };
    return Users;
};
