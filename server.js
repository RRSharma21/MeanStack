var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var Todo = require('./models/todos');

var app = express();

app.use(bodyParser.json());
app.use('/api/todos', require('./controllers/api/todos'));
app.use(require('./controllers/static'));

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
