// const  xss = require('xss');
const models = require('../models/index');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/app');
const HTTP_SUCCESS_STATUS = 200;
const HEAD = 0;

module.exports = {
  findAll: async function (req, res, next) {
    try {
      const servicesWithinPeriod = await models.customers_services.findAndCountAllRequests(req.query);
      const maxCityHaRequested = await models.customers_services.findMaxCityRequests();
      const minProblemTypeHasRequested = await models.customers_services.findMinServiceRequested();

      servicesWithinPeriod.summary = {
        min: minProblemTypeHasRequested[HEAD] ,
        max: maxCityHaRequested[HEAD]
      };

      return res.status(HTTP_SUCCESS_STATUS).json(servicesWithinPeriod);
    }
    catch(error){
      next(error);
    }
  },

  request : async function (req, res, next) {
    try {
      const data = req.body;
      const decodedToken = await jwt.verify(data.accessToken, secretKey);
      data.customer_id = decodedToken.id;
      data.service_id = data.typeOfProblem;
      const userServiceCreated = await models.customers_services.create(data);
      return res.status(HTTP_SUCCESS_STATUS).json(userServiceCreated);
    }
    catch (error){
      next(error);
    }
  }
};