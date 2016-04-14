(function() {
    function LoginCtrl($scope, $modalInstance, $cookies, $window, Auth) {

        var closeModalInstance = function() {
            $modalInstance.close('exit');
        };

        $scope.newUser = function(user) {
            Auth.createUser(user);
            closeModalInstance();
        };
/*
        $scope.newUser = function(user) {
            $scope.validationError = false;
            if (user && user.email && user.name ) {
                if (user.password === user.confirm ) {

                    AuthService.createUser(user);
                    closeModalInstance();

                }else {
                    $window.alert = "Error confirming pass";
                }
            }else {
                $window.alert = "Required field";
            }
        };
*/

 /*       $scope.createUser = function(userName) {

            if(userName && userName !== '') {
                // creates new room and closes modal
                $cookies.put('blocChatCurrentUser', userName);
                closeModalInstance();
            }
            else {
                $window.alert("Invalid input! You must write a valid username.");
            }
        };
*/
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$scope', '$modalInstance', '$cookies', '$window', 'Auth', LoginCtrl]);
})();
