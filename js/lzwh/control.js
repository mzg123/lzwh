/**
 * Created by yjx on 2016/6/29.
 */
angular.module("lzwh")
    .controller('userControl',["$scope","$location","$window","$timeout","userService",
        function($scope,$location,$window,$timeout,userService){
            $scope.newUser=function(key){
                $location.path( $scope.route[key]);
            }
            $scope.addUser=function(user){
                $location.path( $scope.route['userManger']);
            }
            $scope.user={};
            userService.getUsers().success(function(data) {
                    $scope.users= data;
                })
                .error(function(data) {
                    $scope.users= data;
                });
        }])
    .controller('contentControl',["$scope","$location","$window","$timeout","contentService",
        function($scope,$location,$window,$timeout,contentService){
            $scope.addArticle=function(key){
                $location.path( $scope.route[key]);
            }
            $scope.showArticle=function(key,title){
                contentService.currentTitle=title;

                $(this.articles).each(function(index,element){
                       element.title==title? contentService.cuttentContent=element.content: contentService.cuttentContent=null;
                    if(contentService.cuttentContent)return false;
                })
                $location.path( $scope.route[key]);
            }
            $scope.saveContent=function(){

               alert( $scope.ue.getContent());
            }
            $scope.articles= [{
                title:'内容管理内容管理内容管理内容管理内容管理内容管理内容管理内容管理内容管理内容管理',
                author:'4',content:'31',
                ditTime:'67715107@qq.com'
            },{
                title:'2',
                author:'4',content:'3q',
                ditTime:'67715107@qq.com'

            },{
                title:'3',
                author:'4',content:'3a',
                ditTime:'67715107@qq.com'

            },{
                title:'4',
                author:'4',content:'3z',
                ditTime:'67715107@qq.com'

            }
                ,{
                    title:'5',
                    author:'4',content:'3x',
                    ditTime:'67715107@qq.com'

                },{
                    title:'6',
                    author:'4',content:'3s',
                    ditTime:'67715107@qq.com'

                },{
                    title:'7',
                    author:'4',content:'3w',
                    ditTime:'67715107@qq.com'

                },{
                    title:'8',
                    author:'4',content:'23',
                    ditTime:'67715107@qq.com'

                },{
                    title:'9',
                    author:'4',content:'33',
                    ditTime:'67715107@qq.com'

                },{
                    title:'10',
                    author:'4',content:'e3',
                    ditTime:'67715107@qq.com'

                }
            ]
        }])
    .controller('myctrl',["$scope","$location","$window","$timeout","contentService","$q","userService",
        function($scope,$location,$window,$timeout,contentService,$q,userService){
        $scope.clickme=function(){

            $location.path( 'login');

        }
        $scope.back=function(){
            $window.history.back();

        }
        $scope.route={

            login:"login",
            addArticle:"addArticle",
            showArticle:"showArticle",
            newUser:"newUser",
            userManger:"userManger",
            contentManger:"contentManger"

        }
        $scope.nav=function(key){

            $location.path( $scope.route[key]);
        }
        $scope.nav2=function(key){
            $window.open('xmly/loadding.html');

        }
        //s加载js文件
        app.resolveScriptDeps = function(dependencies){
            return function($q,$rootScope){
                  var deferred = $q.defer();
                $script(dependencies, function() {

                 //  UE.delEditor('uedit');
                  //  $scope.ue = UE.getEditor('uedit');


                    deferred.resolve();
                    // all dependencies have now been loaded by $script.js so resolve the promise
                    // $rootScope.$apply(function()
                    // {
                    // deferred.resolve();
                    // });
                });
                 return deferred.promise;
            }
        };


        //试图监听
        $scope.$on('$viewContentLoaded',function(event, toState, toParams, fromState, fromParams){

            if($location.path()=='/h'||$location.path()=='/')
            {


            }
            else if($location.path()=='/contentManger')
            {

            } else if($location.path()=='/userManger')
            {



            }  else if($location.path()=='/addArticle')
            {
               /* app.resolveScriptDeps([
                    'ueditor/ueditor.config.js','ueditor/ueditor.all.min.js'
                ])('','');
*/
                UE.delEditor('uedit');
                $scope.ue = UE.getEditor('uedit');
               // alert(UE.getEditor('editor').getAllHtml());
            }
            else if($location.path()=='/showArticle')
            {
 app.resolveScriptDeps([
                    'ueditor/ueditor.config.js','ueditor/ueditor.all.min.js'
                ])($q,'').then(function(greeting) {
                         UE.delEditor('uedit');
                         $scope.ue = UE.getEditor('uedit');
                         // alert( $scope.ue.getAllHtml());
                         var timer = $timeout(
                             function() {
                                 $scope.ue.setContent( contentService.cuttentContent, false);
                             },
                             100
                         );
                    });
            }

            else {


            }
        })
    }])
