let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dbUrl = 'mongodb://localhost:27017/calcul';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
let personneSchema = mongoose.Schema({
    nom: String,
    prénom: String,
    photo: String,
    domaine: String,
    dob: Date,
    ville: String,
    genre: String,
    dateChoisi: Date,
});

let Persone = mongoose.model('Personne', personneSchema);
module.exports = Personne;