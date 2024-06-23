'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessLogs = sequelize.define('AccessLogs', {
    log_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      access_time: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: () => dateHelper.now(true)
      }
  }, {
    timestamps: false,
    tableName: 'Access_Logs'
  });
  return AccessLogs;
};
