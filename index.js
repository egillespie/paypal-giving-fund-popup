var config = require('./config.js'); // todo replace with nconf

var restify = require('restify');
var server = restify.createServer();
server.use(restify.queryParser({ mapParams: false }));
server.use(restify.bodyParser({ mapParams: false }));

server.get('/', (req, res, next) => {
  res.redirect('/index.html', next);
});

// Try to serve a static HTML file if no other path has matched
server.get(/\/?.*/, restify.serveStatic({
  directory: __dirname,
  match: /^.*[A-Za-z]+.html.*$/
}));

server.listen(config.server.port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
