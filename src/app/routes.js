routes.$inject = ['$stateProvider','$locationProvider', '$urlRouterProvider','$httpProvider'];
export default function routes($stateProvider, $locationProvider,  $urlRouterProvider,$httpProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            template: '<login>',
        })

        .state({
            name:'users',
            url:'/users',
            template: '<users>',
            auth: true
        })

        .state({
            name:'user',
            url:'/user',
            template: '<user>',
            auth: true
        })

        .state({
            name:'news',
            url:'/news',
            template: '<news>',
            auth: true
        })

        .state({
            name:'newsedit',
            url:'/newsedit',
            template: '<newsedit>',
            auth: true
        })

        .state({
            name:'logout',
            template: ' ',
            controller: ['$scope', 'API_BASE', '$http', '$location', 'store', '$rootScope',
                function ($scope, API_BASE, $http, $location, store, $rootScope) {
                    // Remove token from local storage
                    store.remove('access_token');
                    // Invalidate token on backend side
                    $http.get(API_BASE + '/oauth/revoke-token');
                    $rootScope.loggedIn = false;
                    $location.path('/login');
                }
            ]
        });
        $httpProvider.interceptors.push('AuthenticationHttpInterceptor')


    $urlRouterProvider.otherwise('/login');


        $urlRouterProvider
            .when('/', ['$state', function ($state) {
              $state.go('login');
      }]).otherwise('/login');


/*    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
}