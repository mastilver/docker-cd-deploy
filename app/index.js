var express = require('express')();

var i = 0;

express.get('/', function(req, res){
    res.send('' + ++i);
    console.log(i);
});

express.listen(1337);
console.log('listening on 1337');
