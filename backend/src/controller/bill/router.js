const express = require('express');
const Bill = require('../../model/bill');
const controller = require('../base/controller')(Bill);

const router = express.Router();

router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

router.put('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

router.delete('/:id', controller.delete);

module.exports = router;
