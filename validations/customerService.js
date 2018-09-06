const { Joi } = require('celebrate');
const THREE = 3;
const TWO_HUNDRED = 200;

module.exports = {
  body: Joi.object().keys({
    accessToken: Joi.string().required(),
    currentDate: Joi.date().required(),
    typeOfProblem: Joi.string().required(),
    Severity: Joi.string().required(),
    City: Joi.string().required(),
    District: Joi.string().required(),
    problemDescription: Joi.string().required()
  })
};