import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import close from '../../../assets/icons/close.svg'

class UserCtrl {
    constructor($scope, $http, usersService, projectsService, addressesService, $stateParams, store, $location) {
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.close = close;
        $scope.employee = store.get('employee');
        $scope.currentuser = store.get('current_data');
        $scope.tokenUrl = '?access_token=' + store.get('access_token');
        $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        $scope.menutrigger = () => {
            let aside = angular.element( document.querySelector('#aside'));
            let pageoverlay = angular.element( document.querySelector('#pageoverlay'));
            aside.addClass('open');
            pageoverlay.addClass('visible');
        };

        $scope.pageoverlay = () => {
            let aside = angular.element( document.querySelector('#aside'));
            let pageoverlay = angular.element( document.querySelector('#pageoverlay'));

            pageoverlay.removeClass('visible');
            if(aside.hasClass('open')){
                aside.removeClass('open')
            }
        };

        usersService.findByID($stateParams.userId).then(user =>{
            $scope.user = user.data;
        });

        projectsService.findByID($stateParams.userId).then(project =>{
            $scope.projects = project.data;
            console.log($scope.projects)
        });

        addressesService.findByID($stateParams.userId).then(address =>{
            $scope.address = address.data;

        });

        $scope.addImage = function() {
            var f = document.getElementById('file').files[0],
                r = new FileReader();
        
            r.onloadend = function(e) {
              $scope.dataimg = e.target.result;
              //send your binary data via $http or $resource or do anything else with it
            }
        
            r.readAsBinaryString(f);
        }

        $scope.first_name ='';
        $scope.last_name ='';
        $scope.position = '';
        $scope.email = '';
        $scope.skype = '';
        $scope.phone = '';
        $scope.room = '';
        $scope.project = '';

        console.log($scope.address);

        $scope.updateUser = () =>{
            var user = (
                JSON.stringify({
                    first_name: $scope.user.first_name,
                    last_name:$scope.user.last_name,
                    position: $scope.user.position
                }
            ));
            console.log(user);

            var addresses = (
                JSON.stringify({
                    email: $scope.address.email,
                    skype: $scope.address.skype,
                    phone: $scope.address.phone,
                    room: $scope.address.room,
                }
            ));
            console.log(addresses);

            var projectData = (
                JSON.stringify({
                    project: $scope.projects.project_name
                }
            ));
            console.log(projectData);

            usersService.updateUser($stateParams.userId, user).then((user, status) => {
                alert('The user was successfully updated.');
                $location.path('/news');
            }).catch((data, config) =>  {
/*
                $location.path('/news');
*/
            });

            addressesService.updateAddress($stateParams.userId, addresses).then((addresses, status) => {
                alert('The user was successfully updated.');
                $location.path('/news');
            }).catch((data, config) =>  {
/*
                $location.path('/news');
*/
            });

//             projectsService.updateProject($stateParams.userId, projectData).then((projectes, status) => {
//                 $location.path('/news');
//                 alert('The user was successfully updated.');
//             }).catch((data, config) =>  {
// /*
//                 $location.path('/news');
// */
//             });
        }
    }
};

export default UserCtrl;