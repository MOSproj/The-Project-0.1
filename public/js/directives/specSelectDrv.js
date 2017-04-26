(function () {
    angular.module('myApp').directive('specSelect', function() {
        return {
            restrict: 'E',
            templateUrl:'/js/directives/specSelectDrv.html',
            replace: true,
            scope: {
                specKey: '=',
                specVal: '='
            },
            link: function($scope, $el) {
                $scope.$watch("specVal",function(newValue,oldValue) {
                    $('.selectpicker').selectpicker();
                });
            }
        };
    });
})();
