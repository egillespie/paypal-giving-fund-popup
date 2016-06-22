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

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
