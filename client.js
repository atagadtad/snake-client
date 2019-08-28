const net = require('net');


const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // receives data from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // prints console after establishing connection with server
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
  });

  conn.on('connect', () => {
    conn.write('Name: AJT');
  });



  return conn;
}
module.exports = { connect };
