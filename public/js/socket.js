var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió conexión con el servidor');
});

socket.on('sendData', function(data) {
    console.log(data);
});

socket.emit('sendData', {
    author: 'User 1',
    text: 'Message text',
    date: new Date()
}, function(response) {
    console.log(response);
});