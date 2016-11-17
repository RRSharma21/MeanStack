var db = require('../db');

var Todo = db.model('Todo', {
  body: {
    type: String
  },
  isDone: {
    type: Boolean
  }
});

module.exports = Todo;
