'use strict';
module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define(
        'Branch',
        {
            branch_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            full_address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            latitude: {
                type: DataTypes.DECIMAL(9, 6),
                allowNull: false,
            },
            longitude: {
                type: DataTypes.DECIMAL(9, 6),
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: false,
            tableName: 'Branches',
        }
    );
    return Branch;
};
