var socket = io();

socket.on('connect', function () {
    console.log('User connected Via Socket IO');
});

socket.on('message', function (message) {
    console.log(message.text);
});
