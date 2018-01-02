class LoginCtrl {
    constructor($scope, $http, loginService, $location, store) {
        $scope.submit = () => {
            loginService.login($scope.name, $scope.password).then(function (result, status, headers, config) {
                // Saves token to local storage and redirects to "employees" page
                store.set('access_token', result.access_token);
                console.log(result);
                $location.path('/news');
            });
        };
    }
};

export default LoginCtrl;