/**
 * Created by yjx on 2016/7/31.
 */
var getHandle=require('./getHandle.js');

var parse=function(){

    route= {
        '/': "/",
            'favicon': '/favicon.ico',
            'user': '/user',
            'login': '/user/login',
            'biz': '/biz'
    };
    isValid = function (reqPath) {
        for (var key in route) {
            if (route[key] == reqPath) {
                return true;
            }
        }
        return false;
    }
};
parse.prototype={
    Parse:function(req,rep,url,qs){
       // if (!isValid(url.parse(req.url).pathname)) {
        if(false){
            rep.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
            rep.write("{'errcode':404,'errmsg':'404 页面不见啦'}");
            rep.end();
        } else {
            rep.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
            if (req.method.toUpperCase() == 'POST') {
                var postData = "";

                /**
                 * 因为post方式的数据不太一样可能很庞大复杂，
                 * 所以要添加监听来获取传递的数据
                 * 也可写作 req.on("data",function(data){});
                 */
                req.addListener("data", function (data) {

                   postData += data;
                });
                /**
                 * 这个是如果数据读取完毕就会执行的监听方法
                 */
                req.addListener("end", function () {
                    var query = qs.parse(postData);
                     console.log(JSON.stringify(query));
                    var postH=new getHandle(req,rep,qs);
                    postH.handle(query);

                });
            }
            else if (req.method.toUpperCase() == 'GET') {
                /**
                 * 也可使用var query=qs.parse(url.parse(req.url).query);
                 * 区别就是url.parse的arguments[1]为true：
                 * ...也能达到‘querystring库’的解析效果，而且不使用querystring
                 */
                var query = url.parse(req.url, true).query;
                var getH=new getHandle(req,rep);
                getH.handle(req.url);
                //rep.write(req.url);
               // rep.end();
            } else {
                //head put delete options etc.
            }
        }

    }
}



/**
 * 上述路由的简单判断规则
 * @param reqPath
 * @returns {boolean}
 */


module.exports=new parse();
