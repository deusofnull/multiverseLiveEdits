var express = require('express')
var app = express()
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname ));

app.get('/', function(request, response){
	//response.send("hello multiverse");
	response.sendFile( __dirname + '/dimensions/open.html')
});

app.get('/pal_go_gan/not_art', function(request. response){
	response.sendFile(__dirname + '/dimensions/pal_go_gan/dylvid1.html');
});

app.get('/nullfactory/crawl', function(request. response){
	response.sendFile(__dirname + '/nullfactory/crawl.html');
});



var server = app.listen(80, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
	});