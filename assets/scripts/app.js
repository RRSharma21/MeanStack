var app = angular.module('app', []);

app.controller('TodosCtrl', function($scope, TodosSvc) {
  TodosSvc.fetch().success(function(todos) {
    $scope.todos = todos;
  });

  $scope.addTodo = function() {
    if($scope.todoBody) {
      TodosSvc.create({
        isDone: false,
        body: $scope.todoBody
      }).success(function(todo) {
        $scope.todos.push(todo)
        $scope.todoBody = null
      });
    }
  }
});

app.service('TodosSvc', function($http) {
  this.fetch = function() {
    return $http.get('/api/todos');
  }

  this.create = function(todo) {
    return $http.post('/api/todos', todo);
  }
});
