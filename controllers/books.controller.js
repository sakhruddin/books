const books = require('../modeles/Book.modele');
module.exports.booksController = {

postBook: (req, res) => {
    books.create(
        {name: req.body.name,
         author: req.body.author,
         genreBook: req.body.genreBook
    })
    .then((data) => {
        res.json(data)
    })
},

deleteBook:(req, res) => {
    books.findByIdAndDelete(req.params.id)
.then(() => {
res.json('книга удалена')
})
},

patchBook:(req, res) => {
    books.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.Author
    })
    .then(() => {
        res.json('книга изменена')
    })
},

getBookById:(req, res) => {
books.findById(req.params.id, (err, books) => {
if (!err) {
    res.json(books);
  }
}).populate('author')
},

getBooksByGenre:(req, res) => {
    books.find({}, {genreBook: req.body.genreBook}, (err, books) => {
    if (!err) {
        res.json(books);
      } else {
        res.json(err);
      }
    })
    .populate('genre')
},
}