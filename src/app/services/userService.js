/*
var userService = function($http, API_USER) {
    return {
        findAll: function(callback) {
            return $http.get(API_USER + '/api/admin/employees').then(callback);
        },
        save: function (employee) {
            return $http.post(API_USER + '/api/admin/employees', { firstName: employee.firstName, lastName: employee.lastName, age: employee.age });
        }
    };
};

userService.$inject = ['$http', 'API_BASE']

export default userService*/
