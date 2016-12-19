(function() {
    'use strict';

    angular.module('jasmineApp', [
            'ui.router',
            'components.users',
            'api.users'
        ])
        .config(function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise("/");
        });
})();
