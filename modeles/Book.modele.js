const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author:{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  genreBook:{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;