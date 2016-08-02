var http = require("http");
var qs = require('querystring');

var postData = {"name": "freddon", "domain": "http://192.168.1.103:8888/"};
var outData=qs.stringify(postData);
var options = {
    host: '192.168.1.103',
    port: 8888,
    path: '/',
    //path:'/biz?name=freddon&domain='+encodeURIComponent("http://www.sagosoft.com/"),
    /**
     * 如果改为get，上述的postdata需要自己拆成key＝value格式拼接在path之后
     * 如 '/biz?name=freddon&domain='+encodeURIComponent("http://www.sagosoft.com/")
     */
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //只有post时，这个才有用
        'Content-Length': outData.length

    }
};

var requestCallback = function (response) {
    response.setEncoding('utf-8');
    console.log("状态码 %d \nheaders:\n %s \n当前的请求方式为【%s】请求",response.statusCode,
        JSON.stringify(response.headers),options.method);
    var receiveData = "";
    response.on('data', function (chunk) {
        receiveData += chunk;
    }).on('end', function () {
        //打印
        console.log("\n从" + options.host + "获得的数据为：" + receiveData);
    });

};

var req = http.request(options, requestCallback).on('error',function(e){

    console.log(e.message);
});
req.write(outData);//当然如果是get请求 这个写了也没用
req.end();