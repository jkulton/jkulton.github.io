var app = angular.module('todo', ['base64']);

app.controller('TodoController', ['$scope', '$base64', '$location', function($scope, $base64, $location) {


  	$scope.parsed = '';
  	$scope.todos = [];

	$scope.runOnLoad = function() {
		console.log($location.path());
		if($location.path()) {
			console.log('The if statement ran');
  			var base64EncodedString = decodeURIComponent($location.path().slice(1));
			var decodedString = $base64.decode(base64EncodedString);

			console.log(decodedString);

			$scope.todos = decodedString.split(',');
  		}
	}

  	$scope.addTodo = function(scope) {
  		console.log($scope.todos.length);
  		$scope.todos.push('');
  	}

  	$scope.parseTodos = function() {
  		$scope.parsed = '';
  		for (var i = 0; i < $scope.todos.length; i++) {
  			$scope.todos[i] = $scope.todos[i].replace(",","");
  		}

  		$scope.parsed = $scope.todos.join(',');

  		console.log($scope.parsed);

  		console.log('size of the input is ' + $scope.parsed.length);

		var base64EncodedString = $base64.encode($scope.parsed);
		var urlSafeBase64EncodedString = encodeURIComponent(base64EncodedString);

  		console.log('size of the compressed sample is ' + urlSafeBase64EncodedString.length);

  		console.log('\n\n' + urlSafeBase64EncodedString + '\n\n');

  		$location.path(urlSafeBase64EncodedString);

  	}
  	
  	//$scope.addTodo();
  	$scope.runOnLoad();
}]);