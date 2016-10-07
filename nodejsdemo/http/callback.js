/**
 * Created by D on 2016/10/7.
 */
function learn(something) {
    console.log(something)
}

function we(callback, something) {
    something += ' is cool'
    console.log("we:" + callback)
    console.log("we:" + something)
    callback(something)
}

we(learn, 'Node.js')

we(function(something){
    console.log(something)
}, 'Jade')