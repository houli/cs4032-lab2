const ip = require('ip');
const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', handleMessage);
});

function handleMessage(buffer) {
  const str = buffer.toString();

  if (str.startsWith('HELO ')) {
    const response = `${str}IP:${ip.address()}\nPort:${this.server.address().port}\nStudentID:13323304\n`;

    this.write(response);
  } else if (str.startsWith('KILL_SERVICE\n')) {
    this.destroy();
    process.exit(0);
  } else {
    this.write('Invalid command');
  }
}

server.listen(process.argv[2], function() {
  console.log(`Server listening on port ${this.address().port}`);
});
