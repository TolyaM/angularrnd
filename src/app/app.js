import angular from 'angular'
import router from 'angular-ui-router'
import routefile from './routes'
import login from './components/login'
import '../assets/styles/styles.css'

import users from './components/users'
import news from './components/news'
import newsedit from './components/newsedit/index'
import user from './components/user'
import loginService from './services/loginService'
import usersService from './services/usersService'

import storage from 'angular-storage'
import route from 'angular-route'
import cookie from 'angular-cookies'
import resource from 'angular-resource'
import jwt from 'angular-jwt'


export default angular.module('app', [
router,
storage,
route,
cookie,
resource,
jwt
])
    .config(routefile)
    .component('login', login)
    .component('users', users)
    .component('news', news)
    .component('newsedit', newsedit)
    .component('user', user)
    .factory('loginService', loginService)
    .factory('userService', usersService)
    .constant('API_BASE','http://localhost:9999/uaa')
    .constant('API_USERS','http://localhost:8765/users')
    .constant('API_NEWS', '')
    .constant('API_PROJECTS', 'http://localhost:8765/projects')
    .constant('API_ADDRESSES', 'http://localhost:8765/addresses')
    .service('AuthenticationHttpInterceptor', ['store','$rootScope', function(store, $rootScope) {
            this.request = function(config) {

                if(store.get('access_token')) {
                    config.headers.Authorization = 'Bearer ' + store.get('access_token');
                    $rootScope.loggedIn = true;
                }
                return config;
            };
        }]).run(function (store, $rootScope, $location, $route) {
            $rootScope.$on('$locationChangeStart', function (e, next, current) {
                var nextPath = $location.path();
                var nextRoute = $route.routes[nextPath];
                if(nextRoute && nextRoute.auth && !store.get('access_token')) {
                    e.preventDefault();
                    $location.path('/login');
                }
            });
        });

