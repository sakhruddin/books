const genres = require('../modeles/Genre.model');
module.exports.genresController = {

postGenre:(req, res) => {
const { name, opis } = req.body;
genres.create({
    name,
    opis,
})
.then(() => {
    res.json('addыыed');
})
.catch((e) => {
    res.json(e);
});
},

deleteGenre: async (req, res) => {
   await Genre.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json(" комментарий удален")
        })
},

getGenre:(req, res) => {
    genres.find({})
        .then((data) => {
            res.json(data)
        })
    },

}




