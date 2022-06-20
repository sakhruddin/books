const { Router } = require('express');
const { booksController } = require('../controllers/books.controller');

const router = Router();

router.post('/Books', booksController.postBook);
router.delete('/Books/:id', booksController.deleteBook);
router.patch('/Books/:id', booksController.patchBook);
router.get('/Books/:id', booksController.getBookById);
router.get('/Books', booksController.getBooksByGenre);


module.exports = router;