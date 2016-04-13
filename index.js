var express = require('express');
var app = express();

var md = require('marked');

app.set('view engine', 'jade');
app.set('views', './views'); // specify the views directory

app.get('/', function(req, res){
	// res.send('hello');
	res.render('index', { pageTitle: 'Home', md: md});
})

app.listen(3001, function(){
	console.log('server listening on http://localhost:3001/');
});
