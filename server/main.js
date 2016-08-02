/**
 * Created by yjx on 2016/7/14.
 */
var http = require('http');
var url = require('url');
var qs = require('querystring');

var parse=require('./handleRequest/parse.js');

http.createServer(function (request, response) {

    parse.Parse(request, response,url,qs);
}).listen(8888,'192.168.1.103');

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');