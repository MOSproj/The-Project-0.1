(function () {
    angular.module('myApp').directive('postTemplate', [function() {
        return {
            restrict: 'E',
            templateUrl:'/js/directives/postTemplateDrv.html',
            replace: true,
            scope: {
                postObject: '=',
                love: '&'
            }
        };
    }]);
})();
