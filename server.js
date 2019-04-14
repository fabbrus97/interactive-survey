var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
  console.log('an user connected', socket.handshake.time, "from", socket.handshake.address)
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
})

var port = 8000

http.listen(port, function(){
  console.log("server started on ",port)
})
