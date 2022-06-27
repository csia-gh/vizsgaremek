const express = require('express');
const controller = require('./controller');

const router = express.Router();

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// // patch
router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

router.delete('/:id', controller.delete);

module.exports = router;
