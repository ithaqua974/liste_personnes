const router = require("express").Router();

const personne = require('../controllers/personneController.js');

// router.get('/', personne.view);
router.get('/', personne.list);
router.post('/add', personne.save);
router.get('/delete/:id', personne.delete);
router.get('/edit/:id', personne.edit);
router.post('/update', personne.update);

module.exports = router;