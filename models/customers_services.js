'use strict';
const { handlePagination } = require('../utilities/helper');
const _ = require('lodash');
const HEAD = 0;


module.exports = function(sequelize, DataTypes) {
  const customersServices = sequelize.define('customers_services', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED ,
      primaryKey: true ,
      autoIncrement: true
    },
    customer_id :{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull:false,
      references: {
        model: 'customers',
        key: 'id'
      }
    } ,
    service_id : {
      type: DataTypes.INTEGER.UNSIGNED ,
      allowNull: false,
      references: {
        model: 'services',
        key: 'id'
      }
    },
    Severity :{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull:false
    },
    City :{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull:false
    },
    District :{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull:false
    },
    problemDescription :{
      type: DataTypes.TEXT,
      allowNull:false
    }
  },
  {
    freezeTableName:true,
    tableName: 'users_services',
    timestamps:true
  });

  customersServices.associate = function (models) {
    customersServices.belongsTo(models.customers, {
      onDelete: 'CASCADE',
      foreignKey:  'customer_id',
      targetKey: 'id',
      as :'customer'
    });

    customersServices.belongsTo(models.services, {
      onDelete: 'CASCADE',
      foreignKey: 'service_id',
      targetKey: 'id',
      as :'service'
    });

    customersServices.belongsTo(models.severities, {
      onDelete: 'CASCADE',
      foreignKey: 'Severity',
      as :'serviceSeverity'
    });
  };

  customersServices.findAndCountAllRequests = function (data) {
    const query = {
      where: { createdAt: { $between: [ '1990-1-1', new Date()] } },
      include: [
        {
          model: sequelize.models.customers,
          attributes: ['first_name', 'last_name'],
          as: 'customer',
          required: true
        },
        {
          model: sequelize.models.services,
          attributes: ['name'],
          as: 'service',
          required: true
        },
        {
          model: sequelize.models.severities,
          attributes: ['name'],
          as: 'serviceSeverity',
          required: true
        }
      ]
    };

    if(!data.from && !data.to){
      delete query.where;
    }

    if(data.from){
      query.where.createdAt.$between[HEAD] =new Date(data.from.getFullYear(),data.from.getMonth()
        ,data.from.getDate(),0,0,0) ;
    }

    if(data.to){
      query.where.createdAt.$between[HEAD] = new Date(data.to.getFullYear(),data.to.getMonth()
        ,data.to.getDate(),23,59,59);
    }

    return customersServices.findAndCountAll(
      _.merge(query, handlePagination(data.page, data.perPage))
    );
  };

  customersServices.findMaxCityRequests = function () {
    return sequelize.query('select name, max(max_count) from (SELECT city ,cities.name, count(`city`) as max_count FROM `users_services` AS `users_services` inner join cities on cities.id = users_services.city  GROUP BY city) as x where x.city = city',
      { type: sequelize.QueryTypes.SELECT });
  };

  customersServices.findMinServiceRequested = function () {
    return sequelize.query('SELECT name, min_count FROM (SELECT service_id, services.name, COUNT(`service_id`) AS min_count FROM `users_services` AS `users_services` INNER JOIN services ON services.id = users_services.service_id GROUP BY service_id) AS x order by min_count ASC limit 1',
      { type: sequelize.QueryTypes.SELECT });
  };

  return customersServices;
};
