const wss = require('slowpoison-ws').Server;

module.exports = (port, cb) => {
  return new wss({ port }, cb);
};
