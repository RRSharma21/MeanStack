var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var Todo = require('./models/todos');

var app = express();

var port = process.env.port || 3000;

app.use(bodyParser.json());
app.use('/api/todos', require('./controllers/api/todos'));
app.use(require('./controllers/static'));

app.listen(port, function() {
  console.log('Server listening on', port);
});
