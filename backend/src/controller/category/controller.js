const service = require('./service');
const createError = require('http-errors');
const Category = require('../../model/category');

exports.findAll = (req, res, next) => {
  return service.findAll().then((category) => {
    res.json(category);
  });
};

exports.findOne = (req, res, next) => {
  return service.findOne(req.params.id).then((category) => {
    if (!product) {
      return next(new createError.NotFound('Category not found'));
    }
    return res.json(product);
  });
};

exports.update = (req, res, next) => {
  return service
    .update(req.params.id, req.body)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.create = (req, res, next) => {
  return service
    .create(req.body)
    .then((category) => {
      res.status(201);
      res.json(category);
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
