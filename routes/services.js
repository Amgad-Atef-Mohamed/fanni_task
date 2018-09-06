'user strict';

const express = require('express');
const serviceRouter = express.Router();
const { celebrate: validate } = require('celebrate');
const userServiceValidationSchema = require('../validations/customerService');
const searchCriteriaSchema = require('../validations/searchCriteria');
const serviceController = require('../controllers/serviceController');
const joiOtions = require('../config/joi');

/* GET all SERVICES REQUESTED. */
serviceRouter.get('/services', validate(searchCriteriaSchema, joiOtions), serviceController.findAll);

/* POST NEW USER SERVICE REQUEST. */
serviceRouter.post('/users/:userId/services', validate(userServiceValidationSchema, joiOtions), serviceController.request);

module.exports = serviceRouter;
