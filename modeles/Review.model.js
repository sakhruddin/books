const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
    text: String,
    nameAuthorReview: String,
    bookName: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}
})

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;