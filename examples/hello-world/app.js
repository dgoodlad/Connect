// Note that even though this looks like a normal node http app, it's really a
// valid connect app using the connect middleware stack.

var Connect = require('../../lib/connect');

module.exports = Connect.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});
