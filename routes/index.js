var express = require('express');
var router = express.Router();
var entries = require('../data/entries');

function render(req, res, next) {
  var model = { words: '', entries: entries.list() };
  res.render('index', model);
};

function insert(req, res, next) {
  entries.add({ words: req.body.words, date: new Date(), count: req.body.words.match(/\S+/g).length });
  next();
}

/* GET home page. */
router.get('/', render);

router.post('/', insert, render);

module.exports = router;
