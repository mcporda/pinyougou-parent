app.controller('indexController',function ($scope,loginService) {
    $scope.showLoginNanme = function () {
        loginService.loginName().success(function (response) {
            $scope.loginName = response.loginName;
        })
    }
    
})