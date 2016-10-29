const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', handleMessage);
});

function handleMessage(buffer) {
  console.log(buffer.toString());
}

server.listen(process.argv[2]);
