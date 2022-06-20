const { Router } = require('express');
const { reviewsController } = require('../controllers/reviews.controller');

const router = Router();
router.post('/reviews', reviewsController.postReview);
router.delete('/reviews/:id', reviewsController.deleteReview);
router.get('/reviews', reviewsController. getReviewByBook);

module.exports = router;