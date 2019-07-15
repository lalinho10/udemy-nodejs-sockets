const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    //console.log(client);

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('sendData', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendData', data);
        /*if (data.author) {
            callback({ response: 'Conexión exitosa' });
        } else {
            callback({ response: 'Falla en la conexión' });
        }*/
    });

    client.emit('sendData', {
        author: 'Server',
        text: 'Welcome to application',
        date: new Date()
    });
});