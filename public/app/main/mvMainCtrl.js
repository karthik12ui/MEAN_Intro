angular.module('app').controller('mvMainCtrl', function($scope,mvCachedCourse) {
    // $scope.courses = mvCourse.query();
    $scope.courses = mvCachedCourse.query();
});