'use strict';

module.exports = function(sequelize, DataTypes) {
  const severities = sequelize.define('severities', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      primaryKey: true ,
      autoIncrement: true
    },
    name :{
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  {
    freezeTableName:true,
    tableName: 'severities',
    timestamps:true
  });

  severities.associate = function (models) {
    severities.hasOne(models.customers_services, {
      onDelete: 'CASCADE',
      foreignKey:  'Severity',
      as :'serviceSeverity'
    });
  };

  return severities;
};
