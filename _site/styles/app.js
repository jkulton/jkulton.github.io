var app = angular.module('styleList', []);

app.controller('ListController', function($scope) {

    $scope.userStyles = "";
    $scope.styleArray = [];

    $scope.showMe = function() {
        $scope.styleArray = $scope.userStyles.replace(/\s/g, '').split('}');
        document.querySelector(".styleInput").style.display = "none";
    }
});