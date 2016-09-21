var app = angular.module('styleList', []);

app.controller('ListController', function($scope) {
    $scope.userStyles = "";
    $scope.styleArray = [];
    $scope.createLexicon = function() {
        $scope.styleArray = $scope.userStyles.replace(/\s/g, '').replace(/@media.*}}/, '').split('}');

		for (var i = 0; i < $scope.styleArray.length - 1; i++) {
			$scope.styleArray[i] = $scope.styleArray[i].split("{");
			$scope.styleArray[i][0] = $scope.styleArray[i][0].replace(/,/g, "\n");
			$scope.styleArray[i][1] = $scope.styleArray[i][1].replace(/;/g, "\n").replace(/:/g, ": ");
		}
		$scope.styleArray.pop();
    }
});
