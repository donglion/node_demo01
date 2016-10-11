/**
 * Created by D on 2016/10/11.
 */

var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'm':'IllegalLiveReport',
    'do':'add',
    'callback':'jQuery111105856643945444375_1476201144843',
    'yyid':'1623515979',
    'level':'3',
    'abstract':'开房间，色情直播，还有避孕套，还在吃避孕套',
    '_':new Date().getTime(),
})

var options = {
    hostname: 'www.huya.com',
    port: 80,
    path: '/tian100',
    method: 'POST',
    headers: {
         'Accept':'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
         'Accept-Encoding':'gzip, deflate, sdch',
         'Accept-Language':'zh-CN,zh;q=0.8',
         'Connection':'keep-alive',
         'Cookie':'__FEQUALITY__UUID=8ada8d22-f009-4cda-bc17-72631ed9e739; __yamid_tt1=0.9478943245485425; __yamid_new=C71E0E22A8400001871611B011E0CED0; hiido_ui=0.51335245417431; hdjs_ui=0.9352208229247481; _ga=GA1.2.1500220293.1466606475; hd_ui=0.388945342740044; hd_newui=0.04707261361181736; webps=A; __yasmid=0.9478943245485425; PHPSESSID=l67qa1msset23qsbeqiifednu6; h_pr=1; yyuid=7811938; username=donglion444; password=09105DB7BB18F8DB16557D087B32A31BA546470F; osinfo=926775C7D5AAFBE3613D1FF310EB6FD68905DD83; udb_l=CwBkb25nbGlvbjQ0NKHg_FcAcwBr2Ojo_DCtvkvVco5p6ITlMssD2PjjrmQNCm5QUwl4EpPw6X7chpui7JNnDZK5EgZrR57VxBZnasVVnyh7ZI9n3VL9_Oj7EEkdNLPVK62NEL3ohT_eyInape4QZeqPa3kNw13iX2NWvsq1IWX5wPMvoKVBAAAAAAMAAAAAAAAADQA1OC4zNS4xMzYuMTY1BAA1MjE2; udb_n=136f1b5dfacdd3fe4afdc744f7dda976ec5ab1678beeef4efb727afd05d00c1d44bfb35aa009585d1bf0814e7355f599; udb_c=AMDQBVBqAAJgAELf9InXiq4FX5Rvz_1o-I2iDhrN9AfApv6oWMdJUBmfg3AkDNZIE0j7O6_kQxglzqRPlLfMSBQqK4g2o0gMauArHHlzD2y8EbNtWQIBj-A8q-0jOJ3By1i5jHcpkilH7A==; udb_oar=7D93976A75831D8C40DA853231CED2A8F51B51E49C8C2B585E0AB1B7C115AE426D3DD283E10240C18DFEAFF3956576FFFDED24806B698042F59471FF2D9819BB82A45BB4465382C8A12EC601C6A37DC761436D21461B409D626BF83D947402CDDE9CFDEDB13A16E725E0930649601CCE545A23B8D20CBD8BFE26057DE4CD784B198D0CBE77DC4CF2CD89A792D876F1BADA85CD97223C4DE883F607EFC0FAA5EAABE7A8F05A33BA117614B082AFE75FF25531CDCA7E86109BC06DF88DC1B406774C54C40347E260EAA2463E96C99A8F119279D327C0788D69FA9A596E7D32BFEF9967759BF3EF240BB1F3012784C979AF0E55B1C3FA6C977E02522EB434C2F9E767DAED5C3B828EBEC37771BBBDAA3074660325DCE5CA79FE7EDC0D7C64B0E7E45BC7975FAFE07AED6A14D636D168970E12BF035AFF1B5AC8EC794FB5CA2AF97E; __yaoldyyuid=7811938; _yasids=__rootsid%3DC741C7B2F6E000017BC51B30232018E0; sidebarStatus=1; h_unt=1476195866; hdjs_session_id=0.9389708011876792; ya_eid=gamelist/card/hw; SoundValue=0.48; guid=7793b1dc7f8f6a5786312aa32ba3bb21; hdjs_session_time=1476200252651; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1475931847,1476018464,1476104777,1476190350; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1476200253',
         'Host':'www.huya.com',
         'Referer':'http://www.huya.com/tian100',
         'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
         'X-Requested-With':'XMLHttpRequest',
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