/**
 * Created by D on 2016/10/11.
 */

var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'act':'/event mid=C71E0E22A8400001871611B011E0CED0&bve=chrome/45.0.2454.101&lla=zh-CN&os=Windows7&sco=24&sre=1920.1080&fve=21.00&jav=1&coo=1&domain=www.huya.com&fla=Y&sdk_ver=js-ya.huya-1.0&pageType=root&yyuid=7811938&pro=huya_web&pas=donglion444&dty=live&session_id=C741C7B2F6E000017BC51B30232018E0&eid=click/zhibo/sendwords&eid_desc=点击/直播间/发言按钮&ayyuid=1423787831&gameId=2135&dur=143303&furl=http://www.huya.com/g/2135&curl=http%3A%2F%2Fwww.huya.com%2F1584761538:',
    '__yafm':'i',
    ati:''
})

var options = {
    hostname: 'www.huya.com',
    port: 80,
    path: '/1584761538',
    method: 'POST',
    headers: {
        'Accept':'image/webp,image/*,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate, sdch',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Cookie':'hiido_mid=14665987122085561121500070',
        'Host':'ylog.hiido.com',
        'Referer':'http://www.huya.com/1584761538',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36'
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