const service = require('./service');
const createError = require('http-errors');
const Order = require('../../model/order');

exports.findAll = (req, res, next) => {
  return service.findAll().then((orders) => {
    res.json(orders);
  });
};

exports.findOne = (req, res, next) => {
  return service.findOne(req.params.id).then((order) => {
    if (!order) {
      return next(new createError.NotFound('Order not found'));
    }
    return res.json(product);
  });
};

exports.update = (req, res, next) => {
  const validationErrors = new Product(req.body).validateSync();

  if (validationErrors) {
    return next(new createError.BadRequest(validationErrors));
  }

  return service
    .update(req.params.id, req.body)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.create = (req, res, next) => {
  const validationErrors = new Product(req.body).validateSync();
  if (validationErrors) {
    return next(new createError.BadRequest(validationErrors));
  }

  return service
    .create(req.body)
    .then((order) => {
      res.status(201);
      res.json(order);
    })
    .catch((err) => next(new createError.InternalServerError(err.message)));
};

exports.delete = (req, res, next) => {
  return service
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => {
      next(new createError.InternalServerError(err.message));
    });
};
