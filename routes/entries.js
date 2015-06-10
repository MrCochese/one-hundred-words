var express = require('express');
var router = express.Router();
var entries = require('../data/entries');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('entry', entries.get(req.params.id));
});

module.exports = router;
