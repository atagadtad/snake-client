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
  // using the .on notation and 'connect'
  conn.on('connect', () => {
    console.log('Successfully connected to game server')

    conn.write('Name: AJT');


    // setTimeout(function () {
    //   conn.write('Move: up')
    // }, 1000);
    // setTimeout(function () {
    //   conn.write('Move: down')
    // }, 3000);
    // setTimeout(function () {
    //   conn.write('Move: left')
    // }, 2000);
    // setTimeout(function () {
    //   conn.write('Move: right')
    // }, 5000);

  });

  return conn;
}
module.exports = { connect };

