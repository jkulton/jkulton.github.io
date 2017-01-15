var app = angular.module('todo', ['base64', 'angular-clipboard']);

app.controller('TodoController', ['$scope', '$base64', '$location', '$document', '$timeout', function($scope, $base64, $location, $document, $timeout) {
  	$scope.parsed = '';
  	$scope.checks = [];
  	$scope.todos = [];
  	$scope.parsedChecks = [];
  	$scope.share = $location.absUrl();

    $scope.success = function() {
      alert("Link copied to clipboard!");
    }

    $scope.fail = function() {
      alert("Something went wrong. You can copy the url from the address bar to share.");
    }

	$scope.runOnLoad = function() {
		if($location.path() && $location.path() !== '/') {
  			var base64EncodedString = decodeURIComponent($location.path().slice(1));
			var decodedString = $base64.decode(base64EncodedString);
			var saved = decodedString.split(',');
			var savedChecks = saved[0].split('');
			saved.shift();
			$scope.todos = saved;
			$scope.parsedChecks = [];

			for (var i = 0; i < $scope.todos.length; i++) {
				if(savedChecks[i] === "0") {
					$scope.checks.push(false);
				} else if (savedChecks[i] === "1") {
					$scope.checks.push(true);
				}
			}
  		} else {
  			$scope.addTodo();
  		}
		$scope.share = $location.absUrl();
	}

	$scope.deleteTodo = function(which) {
    if ($scope.todos.length === 1) {
      return;
    }
		$scope.todos.splice(which, 1);
		$scope.checks.splice(which, 1);
		$scope.parseTodos();
	}

  	$scope.addTodo = function() {
  		$scope.todos.push('');
 		$scope.checks.push(false);

        $timeout(function() {
          var lastTodo = $scope.todos.length - 1;
          document.getElementById('todo-' + lastTodo).focus();
        }, 0);
  	}

  	$scope.parseTodos = function() {
  		$scope.parsed = '';
  		$scope.parsedChecks = [];
  		$scope.checkString = '';

  		for (var i = 0; i < $scope.todos.length; i++) {
  			$scope.todos[i] = $scope.todos[i].replace(",","");

  			if ($scope.checks[i] === true) {
  				$scope.parsedChecks.push('1');
  			} else if ($scope.checks[i] === false || $scope.checks[i] === null) {
  				$scope.parsedChecks.push('0');
  			}
  		}

  	    $scope.checkString = $scope.parsedChecks.join("");
  		$scope.parsed = $scope.todos.join(',');
  		$scope.parsed = $scope.checkString + "," + $scope.parsed;

		var base64EncodedString = $base64.encode($scope.parsed);
		var urlSafeBase64EncodedString = encodeURIComponent(base64EncodedString);

  		$location.path(urlSafeBase64EncodedString);
  		$scope.share = $location.absUrl();
  	}
  	$scope.runOnLoad();
}]);