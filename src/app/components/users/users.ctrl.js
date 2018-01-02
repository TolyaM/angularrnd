/*

function UsersCtrl ($http, $scope) {
    $scope.users = [{"id":1,"first_name":"Ricky","last_name":"Balderston","email":"rbalderston0@fda.gov","phone":"610-839-3523","skype":1,"position":"Internal Auditor","room":801,"office":"Chicago","photo":"http://dummyimage.com/300x300.jpg/5fa2dd/ffffff"},
        {"id":2,"first_name":"Afton","last_name":"Bilney","email":"abilney1@dell.com","phone":"+375 33 345 45-45-435","skype":2,"position":"Cost Accountant","room":816,"office":"Chicago","photo":"http://dummyimage.com/300x300.jpg/dddddd/000000"},
        {"id":3,"first_name":"Irina","last_name":"Deverille","email":"ideverille2@alexa.com","phone":"164-470-2144","skype":3,"position":"Civil Engineer","room":807,"office":"Ternopli","photo":"http://dummyimage.com/300x300.jpg/dddddd/000000"},
        {"id":4,"first_name":"Marcelia","last_name":"Skacel","email":"mskacel3@biblegateway.com","phone":"275-883-2341","skype":4,"position":"Web Developer II","room":813,"office":"Chicago","photo":"http://dummyimage.com/300x300.jpg/dddddd/000000"},
        {"id":5,"first_name":"Davie","last_name":"Boatman","email":"dboatman4@oakley.com","phone":"943-116-5855","skype":5,"position":"Safety Technician I","room":813,"office":"Minks","photo":"http://dummyimage.com/300x300.jpg/dddddd/000000"},
        {"id":6,"first_name":"Georg","last_name":"Camel","email":"gcamel5@gmpg.org","phone":"868-433-9931","skype":6,"position":"Financial Analyst","room":817,"office":"Ternopli","photo":"http://dummyimage.com/300x300.jpg/ff4444/ffffff"},
        {"id":7,"first_name":"Konstantin","last_name":"Konstantinopolsky","email":"dkidsley6@slate.com","phone":"441-568-5258","skype":7,"position":"Web Designer II","room":814,"office":"Minks","photo":"http://dummyimage.com/300x300.jpg/5fa2dd/ffffff"},
        {"id":8,"first_name":"Madeline","last_name":"Wells","email":"konstantinKonstantinopolskyMail@edublogs.org","phone":"680-583-1789","skype":8,"position":"Desktop Support Technician","room":811,"office":"Minks","photo":"http://dummyimage.com/300x300.jpg/5fa2dd/ffffff"},
    ]
}
export default UsersCtrl;
*/
class UsersCtrl {
    constructor($scope, $http, usersService) {
        $scope.AllUsers = () => {
            usersService.findAll(function (data) {
                console.log(data);
                $scope.users = data;
            });
        };
    }
};

export default UsersCtrl;