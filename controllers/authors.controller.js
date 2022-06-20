const authors = require('../modeles/Author.model.js');
module.exports.authorsController = {

postAuthor: (req, res) => {
    authors.create(
        {name: req.body.name,
         info: req.body.info
    })
    .then((data) => {
        res.json(data)
    })
},


}