(function() {
    function Auth($firebaseAuth) {
        var firebaseRef = new Firebase('https://blinding-fire-789.firebaseio.com');
//        return $firebaseAuth(firebaseRef);
        var firebaseAuth = $firebaseAuth(firebaseRef);

        // now create the interface between firebase and your application
        var authService = {};

        authService.createUser = function(user){

            firebaseAuth.$createUser({
                name: user.name,
                email: user.email,
                password: user.password
            }, function(error,userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });

        } // end createUser()
        return authService;

/* ---> Basically I got it to create users with the above function and now need to figure out how to a) view the users on the DB, b) implement error checking, and c) implement further modals like login, etc. */

 /*       authService.createUser = function(user){
            auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function (userData) {
                ref.child("users").child(userData.uid).set({
                    email: user.email,
                    displayName: user.name
                });
            }).catch(function (error) {
                alert("Error: " + error);
                $ionicLoading.hide();
            });

        authService.logon = function(credentials){
            ... probably reference firebaseAuth object somewhere here
        }

        authService.logoff = function(){
            ... probably reference firebaseAuth object somewhere here
        }

        authService.resetPassword = function(...){
            ... probably reference firebaseAuth object somewhere here
        }
        return authService;
    });

    Auth.$createUser({
        email: $scope.email,
        password: $scope.password
    }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
    }).catch(function(error) {
        $scope.error = error;
    });

*/

    }
    angular
        .module('blocChat')
        .factory('Auth', ['$firebaseAuth', Auth]);
})();
