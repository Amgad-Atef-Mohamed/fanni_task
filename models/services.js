'use strict';

module.exports = function(sequelize, DataTypes) {
  const services = sequelize.define('services', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      primaryKey: true ,
      autoIncrement: true
    },
    name :{
      type: DataTypes.STRING,
      allowNull:false
    },
    description : {
      type:DataTypes.TEXT,
      allowNull : false
    }
  },
  {
    freezeTableName:true,
    tableName: 'services',
    timestamps:true
  });

  services.associate = function (models) {
    services.belongsToMany(models.customers, {
      onDelete: 'CASCADE',
      foreignKey:  'service_id',
      otherKey: 'customer_id',
      through: { model: 'users_services', unique: false },
      as :'customer'
    });
  };

  return services;
};
