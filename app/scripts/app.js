(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomListCtrl',
                templateUrl: '/templates/home.html'
            });
    }

    function BlocChatCookies($modal, $cookies) {

        $modal.openRegistrationModal = function(){
            var modalInstance = $modal.open({
                templateUrl: 'templates/registrationModal.html',
                controller: 'LoginCtrl',
                size: 'sm'
            });
        };

        $modal.openRegistrationModal();


/*
        if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {

            $modal.openLoginModal = function(){
                var modalInstance = $modal.open({
                    templateUrl: 'templates/loginModal.html',
                    controller: 'LoginCtrl',
                    size: 'sm'
                });
            };

            // display username modal
            $modal.openLoginModal();
        } */
    }

    angular
        .module('blocChat', ['firebase', 'ui.bootstrap', 'ui.router', 'ngCookies', 'ngMessages'])
        .config(config)
        .run(['$modal', '$cookies', BlocChatCookies]);
})();
