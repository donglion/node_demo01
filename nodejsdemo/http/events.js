/**
 * Created by D on 2016/10/11.
 */
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

// addEventListener

life.on('求安慰', function(who){
    console.log('给' + who + ' 倒水')
})

var has = life.emit('求安慰', '汉子')

console.log(has)

