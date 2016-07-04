var socket = io();

socket.on('connect', function () {
    console.log('User connected Via Socket IO');
});

socket.on('message', function (message) {
    console.log(message.text);
    $('.messages').append('<p>' + message.text + '</p>');
});


//Handles submitting of new messages
var $form = $('#message-form');
$form.on('submit', function (event) {
    var $message = $form.find('input[name=message]');
    event.preventDefault();
    
    socket.emit('message', {
        text: $message.val()
    });

    $message.val('');

});