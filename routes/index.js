var express = require('express');
var router = express.Router();
var entries = require('../data/entries');

function render(req, res, next) {
  var words = req.body.words || '';
  var count = (words.match(/\S+/g) || []).length;

  var model = { words: words, count: count, entries: entries.list() };
  res.render('index', model);
};

function insert(req, res, next) {
  var words = req.body.words || '';
  var count = (words.match(/\S+/g) || []).length;

  var model = { words: words, count: count, entries: entries.list() };

  if (count < 100) {
  	model.error = 'Needs more words'
    return res.render('index', model);
  }

  entries.add({ words: req.body.words, date: new Date(), count: count });
  next();
}

function redirect(req, res, next) {
  return res.redirect('/');
}

/* GET home page. */
router.get('/', render);

router.post('/', insert, redirect);

module.exports = router;
