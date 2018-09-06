const { Joi } = require('celebrate');

module.exports = {
  query: Joi.object().keys({
    from: Joi.date().optional('from'),
    to: Joi.date().optional('to'),
    page:  Joi.number().optional(),
    perPage:  Joi.number().optional(),
    _:  Joi.number().optional(),
  })
};