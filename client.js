const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });
  
  conn.on("connect", () => {
    console.log('Welcome, Jake Appleby3!')
  });
  conn.on("data", (data) => {
    console.log(`Server says: `, data)
  });
  
  conn.setEncoding("utf8");
};

  module.exports = {connect};