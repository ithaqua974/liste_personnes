let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let dbUrl = 'mongodb://localhost:27017/personne';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
let personneSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    photo: String,
    domaine: String,
    dob: Date,
    ville: String,
    genre: Boolean,
    choisi: Boolean,
    dateChoisi: Date,
});

let Personne = mongoose.model('Personne', personneSchema);
module.exports = Personne;