// const  xss = require('xss');
const models = require('../models/index');
const HTTP_SUCCESS_STATUS = 200;

module.exports = {
  find : async function (req, res, next) {
    try {
      const foundDistricts = await models.districts.findAll({ where: { city_id: req.params.cityId } });
      return res.status(HTTP_SUCCESS_STATUS).json(foundDistricts);
    }
    catch (error){
      next(error);
    }
  }
};