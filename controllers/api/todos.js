var Todo = require('../../models/todos');
var router = require('express').Router();

router.get('/', function(req, res, next) {
  Todo.find().exec(function(err, todos) {
    if(err)
      return next(err);
    res.json(todos);
  });
});

router.post('/', function(req, res, next) {
  var todo = new Todo({
    isDone: false,
    body: req.body.body
  });

  todo.save(function(err, todo)
  {
    if(err)
      return next(err)
    res.json(201, todo);
  });
});

module.exports = router;
