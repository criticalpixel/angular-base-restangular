//Application Controller
app.controller('appController', ['Restangular','$http','foo', function(Restangular, $http,foo){
	// Quick Setup & Test
	var self = this;
	self.bar = foo;

	//Restangular 
	var baseUrl = Restangular.all(''); // set datapoint
	baseUrl.getList().then(function(data){
		$scope.restApi = data;
		console.log($scope.restApi);
	});

}]);