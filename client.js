const net = require('net');


const connect = function () {
  const conn = net.createConnection({
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // receives data from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // prints console after establishing connection with server
  // using the .on notation and 'connect'
  conn.on('connect', () => {
    console.log('Successfully connected to game server')

    conn.write('Name: AJT');
    conn.write('Say: huhu')

    conn.write('Move: up')
    conn.write('Move: down')
    // conn.write('Move: left')
    // conn.write('Move: right')

  });

  return conn;
}
module.exports = { connect };

