/**
 * Created by yjx on 2016/5/30.RouteListCtl
 */

var app =angular.module("lzwh",['ngRoute','ngAnimate']).controller('RouteListCtl',["$scope","$location","$window","$timeout",
    function($scope,$location,$window,$timeout){
        $scope.nav=function(key){
            $location.path( $scope.route[key]);
        }
}]).config(['$routeProvider', '$compileProvider' ,'$controllerProvider',
    function ($routeProvider, $compileProvider ,$controllerProvider) {

        //路由配置
    $routeProvider
        .when('/', {
            templateUrl: 'view/contentManger.html',
          /*  resolve: {
                deps: app.resolveScriptDeps([
                    'js/xmly/xmly.js' 15010190209
                ])
            }*/
        })
        .when('/userManger', {
            templateUrl: 'view/userManger.html',
             controller:'userControl'
        })
        .when('/addArticle', {
            templateUrl: 'view/addArticle.html',
            controller:'contentControl'
        })
        .when('/showArticle', {
            templateUrl: 'view/addArticle.html',
            controller:'contentControl'
        })
        .when('/newUser', {
            templateUrl: 'view/newUser.html',
            controller:'userControl'
        })
        .when('/contentManger', {
            templateUrl: 'view/contentManger.html'
        })
        .when('/classManger', {
            templateUrl: 'view/classManger.html'
        })
        .when('/dyt', {
            templateUrl: 'xmly/dyt.html'
        })
        .when('/h', {
            controller: 'RouteListCtl',
            templateUrl: 'xmly/userManger.html'
        })
        .when('/xzt', {
            templateUrl: 'xmly/xzt.html'
        })
        .when('/wd', {
            templateUrl: 'xmly/wd.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

