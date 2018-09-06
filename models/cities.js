'use strict';

module.exports = function(sequelize, DataTypes) {
  const cities = sequelize.define('cities', {
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
    tableName: 'cities',
    timestamps:true
  });

  return cities;
};
