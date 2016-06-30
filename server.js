/**
 * Created by shahzaib on 6/30/16.
 */

var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public/'));
console.log(__dirname)
http.listen(PORT, function () {
    console.log('Server is started on port: ' + PORT);
})