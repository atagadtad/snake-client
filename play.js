const { connect } = require('./client');
const stdin = process.stdin;
console.log('Connecting ...');
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
setupInput();

// uses ctr + c to exit the game using stdin.
const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};
handleUserInput();