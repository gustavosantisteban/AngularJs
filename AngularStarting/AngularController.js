var app = angular.module('StartingApp', []);

app.controller('PrimerControllerCtrl', ['$scope', function ($scope) {
	$scope.countEquipoSelectionChanged = 0;

	$scope.countEquipoSelectionChanged = function() {
		$scope.countEquipoSelectionChanged++;
	};
}])