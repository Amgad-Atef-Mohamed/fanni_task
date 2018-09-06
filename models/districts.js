'use strict';

module.exports = function(sequelize, DataTypes) {
  const districts = sequelize.define('districts', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      primaryKey: true ,
      autoIncrement: true
    },
    name :{
      type: DataTypes.STRING,
      allowNull:false
    },
    city_id : {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull : false
    }
  },
  {
    freezeTableName:true,
    tableName: 'districts',
    timestamps:true
  });

  return districts;
};
