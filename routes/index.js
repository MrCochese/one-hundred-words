var express = require('express');
var router = express.Router();
var entries = require('../data/entries');

function render(req, res, next) {
  console.log(req.body);
  var model = { words: req.body.words || '', entries: entries.list() };
  console.log(model);
  res.render('index', model);
};

/* GET home page. */
router.get('/', render);

router.post('/', function(req, res, next) {
  entries.add({ words: req.body.words });
  next();
}, render
);

module.exports = router;
