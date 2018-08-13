const controller = require('./controller');
const express = require('express');

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getBooks);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.getBookById);

module.exports = router;