'use strict';

module.exports = function(sequelize, DataTypes) {
  const customers = sequelize.define("customers", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      primaryKey: true ,
      autoIncrement: true
    },
    first_name : {
      type:DataTypes.STRING,
      allowNull: false,
    },
    last_name : {
      type:DataTypes.STRING,
      allowNull: false,
    },
    email : {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true
    }
  },
  {
    freezeTableName:true,
    tableName: 'customers',
    timestamps:true
  });

  customers.associate = function (models) {
    customers.belongsToMany(models.services, {
      onDelete: 'CASCADE',
      foreignKey:  'customer_id',
      otherKey: 'service_id',
      through: { model: 'users_services', unique: true },
      as :'servicesRequested'
    });
  };

  return customers;
};
