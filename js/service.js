var url = require('url');
var http = require('http');
var server = http.createServer();

server.on('request',function(request,response){
    var urlObj = url.parse(request.url,true);
    var queryObj = urlObj.query;
    console.log('有请求进来了，请求地址是'+request.url);
    var resData = queryObj.callback+'('+'{foo:"bar"}'+')';
    setTimeout(function(){
        response.end(resData);
    },3000);
});

server.listen(3000,function(err){
    console.log('server is running at prot 3000.')
});