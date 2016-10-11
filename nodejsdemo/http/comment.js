/**
 * Created by D on 2016/10/11.
 */

var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'content':'就飞快的',
    'cid':348
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept':application/json,
        'Content-Length' : postData.length,

    }

}

var req = http.request(options, function(res){
    console.log('status' + res.statusCode)
    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })
    res.on('end', function() {
        console.log('评论完毕！')
    })
    res.on('error', function(e) {
        console.log('error:' + e.message)
    })

})

req.write(postData)

req.end()