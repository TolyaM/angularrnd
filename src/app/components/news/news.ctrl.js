import imageProfile from '../../../assets/img/profile-picture-thumb.jpg'
import logo from '../../../assets/icons/logo.svg'
import menu from '../../../assets/icons/menu.svg'
import logout from '../../../assets/icons/logout.svg'
import edit from '../../../assets/icons/edit.svg'
import deletesvg from '../../../assets/icons/delete.svg'
import close from '../../../assets/icons/close.svg'
import search from '../../../assets/icons/search.svg'

class NewsCtrl {
    constructor($scope, $http, newsService, store, $window) {
        $scope.logo = logo;
        $scope.imageProfile = imageProfile;
        $scope.menu = menu;
        $scope.logout = logout;
        $scope.edit = edit;
        $scope.deletesvg = deletesvg;
        $scope.close = close;
        $scope.search = search;
        $scope.employee = store.get('employee');
        $scope.currentuser = store.get('current_data');
        $scope.searchKey = '';
        $scope.news = [];
        $scope.tokenUrl = '?access_token=' + store.get('access_token');

        $scope.menutrigger = () => {
            let aside = angular.element( document.querySelector( '#aside' ) );
            let pageoverlay = angular.element( document.querySelector( '#pageoverlay' ) );
            aside.addClass('open');
            pageoverlay.addClass('visible');
        };

        $scope.pageoverlay = () => {
            let aside = angular.element( document.querySelector( '#aside' ) );
            let pageoverlay = angular.element( document.querySelector('#pageoverlay'));

            pageoverlay.removeClass('visible');
            if(aside.hasClass('open')){
                aside.removeClass('open')
            }
        };

        $scope.Important = () => {
            $scope.tab = 'Important';
            newsService.findImportant().then(data => {
                $scope.news = data;
            });
        };

        $scope.Daily = () => {
            $scope.tab = 'Daily';
            newsService.findDaily().then(data => {
                $scope.news = data;
            });
        };

        $scope.deleteNews = (newsId) => {
            var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');

            if (deleteUser) {
                newsService.deleteNews(newsId).then(response => {

                });

                var news = angular.element( document.querySelector( '#CurrentNews' ) );
                news.empty();
            }
        };


        $scope.Important();
    }
}

export default NewsCtrl;
