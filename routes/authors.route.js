const { Router } = require('express');
const { authorsController } = require('../controllers/authors.controller');

const router = Router();
router.post('/authors', authorsController.postAuthor);


module.exports = router;