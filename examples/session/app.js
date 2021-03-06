
/**
 * Module dependencies.
 */

var sys = require('sys'),
    MemoryStore = require('./../../lib/connect/middleware/session/memory'),
    Connect = require('./../../lib/connect');

// One minute
var minute = 60000;


var Server = module.exports = Connect.createServer(
    Connect.logger({ format: ':method :url' }),
    Connect.bodyDecoder(),
    Connect.redirect(),
    Connect.cookieDecoder(),
    Connect.session({ store: new MemoryStore({ reapInterval: minute, maxAge: minute * 5 }) }),
    Connect.flash(),
    Connect.router(app),
    Connect.errorHandler({ dumpExceptions: true, showStack: true })
);

function app(app) {
    app.get('/', function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Fetch number of "online" users
        req.sessionStore.length(function(err, n){
            // Display flash messages
            req.flash('info').forEach(function(msg){
                res.write('<p>' + msg + '</p>');
            });

            // User joined
            if (req.session.name) {
                res.write('<p>Welcome ' + req.session.name + '</p>');
            // User has not "joined", display the form
            } else {
                res.write('<form method="post">'
                    + 'Name: <input type="text" name="name"/>'
                    + '<input type="submit" value="Join" name="op" />'
                    + '</form>');
            }

            // Display online count
            res.write('<ul><li>Online: ' + n + '</li>');
            req.sessionStore.all(function(err, sessions){
                sessions.forEach(function(sess){
                    if (sess) {
                        var d = new Date(sess.lastAccess),
                            date = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()
                                + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                        res.write('<li>' + (sess.name || 'guest') + ' was last active on ' + date + '</li>');
                    }
                });
                res.end('</ul>');
            });
        });
    });
    app.get('/logout', function(req, res){
        req.session.regenerate(function(err){
            req.flash('info', 'Logged out');
            res.redirect('/');
        });
    });
    app.post('/', function(req, res){
        switch (req.body.op) {
            case 'Join':
                req.session.regenerate(function(err){
                    var name = req.session.name = req.body.name;
                    req.flash('info', 'joined as _"' + name + '"_ click [here](/logout) to logout.');
                    res.redirect('/');
                });
                break;
        }
    });
}