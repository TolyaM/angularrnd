var usersFactory = function ($http, $httpParamSerializer, API_USERS) {
    return {
        findAll: function(callback) {
            return $http.get(API_USERS + '/api/users').then(callback);
        }/*,
        save: function (employee) {
            return $http.post(API_BASE + '/api/users', { firstName: employee.firstName, lastName: employee.lastName, age: employee.age });
        }*/
    };
}
usersFactory.$inject = ['$http', '$httpParamSerializer', 'API_USERS']

export default usersFactory