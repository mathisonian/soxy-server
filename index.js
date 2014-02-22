var io = require('socket.io').listen(8000);
var request = require('request');



io.sockets.on('connection', function (socket) {

    console.log('connection');
    socket.on('get', function (data) {
        console.log('get');
        request.get({
            url: data.url
        }, function(error, response, body) {
            socket.emit('get', body);
        });
    });

});
