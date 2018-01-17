import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import close from '../../../assets/icons/close.svg'

class NewsaddCtrl {
    constructor($scope, $http, newsService, $stateParams, store, $location){
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.employee = store.get('employee');
        $scope.close = close;
        $scope.dateCreate = new Date();
        $scope.tokenUrl = '?access_token=' + store.get('access_token');

        $scope.menutrigger = () => {
            let aside = angular.element( document.querySelector( '#aside' ) );
            let pageoverlay = angular.element( document.querySelector( '#pageoverlay' ) );
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

        $scope.category = 'important';
        $scope.heading = '';
        $scope.text = '';
        $scope.dateCreate = '';

       $scope.saveNews = () =>{

           if (!$scope.addForm.$valid) {
               alert('Please correct errors.');
           }
           else{
               let data = (
                   JSON.stringify({
                       category: $scope.category,
                       heading: $scope.heading,
                       text: $scope.text,
                       dateCreate: $scope.dateCreate = new Date()
                   })
               );
               newsService.saveNews(data).then((data, status) => {
                   alert('The news was successfully added.');
                   $location.path('/news');
               }).catch((data,config) =>{

               });
           }
       }
    }
};


export default NewsaddCtrl;
