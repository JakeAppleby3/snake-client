const { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY } = require('./constants')
let connection;
let func;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
  handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function (key) {
  const step = function (key) {
    func = setInterval(() => {
      connection.write(key);
    }, 100);
  };
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    clearInterval(func);
    step(UP_KEY);
  }
  if (key === 'a') {
    clearInterval(func);
    step(LEFT_KEY);
  }
  if (key === 's') {
    clearInterval(func);
    step(RIGHT_KEY);
  }
  if (key === 'd') {
    clearInterval(func);
    step(DOWN_KEY)
  }
  if (key === 't') {
    step("Say: Sup lads!");
  }
};


module.exports = { setupInput };