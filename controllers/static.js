var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/info.html'));
});

router.get('/install', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/install.html'));
});

//design
router.get('/design', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/design.html'));
});

router.get('/experience', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/experience.html'));
});

router.get('/example', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/todos.html'));
});

router.get('/credits', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/credits.html'));
});


router.use(express.static(__dirname + '/../assets'));

module.exports = router;
