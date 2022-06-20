const Review = require('../modeles/Review.model');
const reviews = require('../modeles/Review.model');
module.exports.reviewsController = {

    postReview:(req, res) => {
    reviews.create({
        text: req.body.text,
    nameAuthorReview: req.body.nameAuthorReview,
    bookName: req.body.bookName
    }).then((data) => {
        res.json(data)
    })
    },

    deleteReview:(req, res) => {
        reviews.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json('added')
        })
        },

        getReviewByBook: (req, res) => {
            Review.find({bookName: req.body.bookName})
            .then((data) => {
                res.json(data)
            })
        } 

    }


