const mongoose = require("mongoose");

const authorsSchema = mongoose.Schema({
  name: String,
  info: String
});

const Author = mongoose.model('Author', authorsSchema);
module.exports = Author;