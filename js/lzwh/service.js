/**
 * Created by yjx on 2016/6/29.
 */
angular.module("lzwh")
    .factory('baseService', function($http) { // injectables go here

        var baseService = {    // our factory definition
            backendUrl : "http://localhost:3000",
        };
        return baseService;
    })
    .factory('contentService',["baseService","$http", function(baseService,$http) { // injectables go here

        var service = {    // our factory definition
        user: {},
            name:"contentService",
            url:baseService.backendUrl,
        setName: function(newName) {
            service.user['name'] = newName;
        },
        setEmail: function(newEmail) {
            service.user['email'] = newEmail;
        },
        save: function() {
            return $http.post(backendUrl + '/users', {
                user: service.user
            });
        }
    };
        return service;
}])
 .factory('userService',["baseService","$http",  function(baseService,$http) { // injectables go here

        var service = {    // our factory definition
            user: {},
            url:baseService.backendUrl,
            name:"contentService",
            getUsers:function( ){
               return $http.get('http://localhost:8022/users.txt')
                   ;

            },
            setUsers: function(data) {
                service.users = data;
            },
            setName: function(newName) {
                service.user['name'] = newName;
            },
            setEmail: function(newEmail) {
                service.user['email'] = newEmail;
            },
            save: function() {
                return $http.post(backendUrl + '/users', {
                    user: service.user
                });
            }
        };
        return service;
    }]);;

