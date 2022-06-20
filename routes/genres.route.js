const { Router } = require('express');
const { genresController} = require('../controllers/genres.controller');

const router = Router();

router.post('/genres', genresController.postGenre);
router.delete('/genres/:id', genresController.deleteGenre);
router.get('/genres', genresController.getGenre);
module.exports = router;