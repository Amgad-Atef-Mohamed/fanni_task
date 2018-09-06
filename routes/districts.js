'user strict';

const express = require('express');
const districtRouter = express.Router();
const districtsController = require('../controllers/districtsController');


/* GET users listing. */
districtRouter.get('/cities/:cityId/districts', districtsController.find);

module.exports = districtRouter;
