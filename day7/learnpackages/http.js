var http = require('http')
var server=http.createServer(function(req,res){
    res.write('Its working');
    res.end();

})
 server.listen(3700);