/**
 * Created by shahzaib on 6/30/16.
 */

var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public/'));

io.on('connection', function (socket) {
    console.log('User connected via socket.io');
    socket.emit('message', {
        text: "Welcome to the Chat App."
    });

    socket.on('message', function (message) {
        console.log("New Message " + message.text);
    });
});



http.listen(PORT, function () {
    console.log('Server is started on port: ' + PORT);
});