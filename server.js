var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(7777, function(){
    console.log('Server running on 7777...');
});