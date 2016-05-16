var app =  angular.module('app', ['core']);

app.config(['RestangularProvider',function(RestangularProvider) {
	RestangularProvider.setBaseUrl(''); // set api URL
}]);