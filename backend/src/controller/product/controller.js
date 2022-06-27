const service = require('./service');
const createError = require('http-errors');
const Product = require('../../model/product');

exports.findAll = (req, res, next) => {
  return service.findAll().then((products) => {
    res.json(products);
  });
};

exports.findOne = (req, res, next) => {
  return service.findOne(req.params.id).then((product) => {
    if (!product) {
      return next(new createError.NotFound('Product not found'));
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
    .then((product) => {
      res.json(product);
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
    .then((product) => {
      res.status(201);
      res.json(product);
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
