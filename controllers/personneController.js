let mongoose = require('mongoose');
let Personne = require('../models/personneModel.js');


let dbUrl = 'mongodb://localhost:27017/personne';
const db = mongoose.connection;

const controller = {};

// controller.view = (req, res) => {
//     res.render("index")
// };
controller.list = (req, res) => {
    Personne.find(function (err, personnes) {

        if (err) throw err;
        res.render("index", {
            personnes: personnes

        });
    });


};
controller.save = (req, res) => {
    try {
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {

            let personneAjout = new Personne({
                nom: req.body.nom,
                prenom: req.body.prenom,
                photo: req.body.photo,
                dob: req.body.dob,
                ville: req.body.ville,
                genre: req.body.genre,
                domaine: req.body.domaine,
            });

            personneAjout.save((err) => {
                if (err) throw err;
                res.redirect('/');
            })

        });
    } catch (err) {
        if (err) {
            console.log(err)
        }
    }
    // rendu de la vue avec la variable résultat

};

controller.delete = (req, res) => {
    Personne.findByIdAndRemove(req.params.id, function (err, personne) {
        if (err) throw err;
        res.redirect("/");
    })
};
controller.edit = (req, res) => {

    Personne.findById(req.params.id, function (err, personne) {
        console.log(personne);
        if (err) throw err;
        if (personne) {
            Personne.find(function (err, personnes) {
                if (err) throw err;
                res.render("edit", {
                    personne: personnes,
                    dbPersonne: personne
                });

            });
        }
    })
};
controller.update = (req, res) => {
    Personne.findById(req.body._id, function (err, personne) {
        if (err) throw err;
        // console.log(req.body);
        // console.log(personne);
        if (personne) {
            mamodiff = new Personne();
            mamodiff = req.body;
            mamodiff._id = mongoose.Types.ObjectId(mamodiff._id);

            console.log(mamodiff);
            Personne.findByIdAndUpdate(mamodiff, mamodiff, false,
                function (err) {
                    if (err) throw err;
                    res.redirect('/');
                }
            )




        }
        res.redirect('/');
    })

};
module.exports = controller;