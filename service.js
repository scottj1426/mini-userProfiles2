angular.module('userProfiles').service('mainService', function($http) {

	var baseurl =
	"https://reqres.in/api/users?page=1";

  this.getUsers = function() {
		var promise = $http({
			method: "GET",
			url: baseurl
		});
		return promise;
  };
});

//https://reqres.in/api/users?page=1
