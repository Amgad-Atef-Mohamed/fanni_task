'use strict';

const serviceRouter =require('./services');
const districtRouter =require('./districts');
const jwt = require('jsonwebtoken');
const { version, secretKey } = require('../config/app');
const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_INTERNAL_SERVER_ERROR_STATUS = 500;
const HTTP_UNAUTHORIZED_STATUS = 401;
const HEAD = 0;

module.exports = function ConfigApiRoutes (app) {
  app.get('/', (req, res) => {
    const token = jwt.sign({ id: '1' }, secretKey,{ expiresIn: '1m' });
    return res.render('index.ejs', { accessToken: token });
  });

  app.get('/services', function (req, res) {
    res.render('searchServices');
  });

  app.use(`/api/${version}/`,serviceRouter);
  app.use(`/api/${version}/`,districtRouter);

  // handle joi errors.
  app.use(function (err, req, res, next) {
    if (err && err.name === 'ValidationError') {
      const error = {};
      err.details.forEach(function (errorObject) {
        error[errorObject.path[HEAD]] = errorObject.message;
      });
      return res.status(HTTP_BAD_REQUEST_STATUS).json(error);
    }
    next(err);
  });

  // catch jwt error
  app.use(function (err, req, res, next) {
    if (err && new RegExp('Token').test(err)) {
      const error = {
        'statusCode': HTTP_UNAUTHORIZED_STATUS,
        'error': err.name,
        'message': err.message.replace('jwt', 'Token')
      };
      return res.status(HTTP_UNAUTHORIZED_STATUS).json(error);
    }
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'invalid data' });
    }

    if (err != null && typeof err === 'object') {
      const error = {
        statusCode: 500,
        error: err.error || 'Bad Request',
        message: err.message
      };
      return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json(error);
    }
    next(err);
  });


  // catch 404 and forward to error handler
  app.use(function (req, res) {
    const error = new Error();
    error.statusCode = 404;
    error.error = 'Not Found';
    error.message = 'This Route Not Found';
    return res.status(HTTP_NOT_FOUND_STATUS).json();
  });
};
