var express = require('express');
var app = express();
var md = require('marked'); //?
var fs = require('fs'); //for fs.readdir
var S = require('string'); //string.js
    // other = require("./otherfile");

app.set('view engine', 'jade');
app.set('views', __dirname + '/views'); // specify the views directory

// Static resource lookup
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
	// res.send('hello');
	// res.render('index', { pageTitle: 'Home', md: md});

	fs.readdir('./views', function(err, files){
		res.render('index', {posts: files, pageTitle: 'Home'});
	});

})
app.get('/:post', function(req, res){
	var post = req.params.post;
	res.render(post, { pageTitle: post, md: md});
})
app.get('/404', function(req, res){
	res.send('what???');
});
// app.get('*', function(req, res){
//   res.send('what???');
// });


app.listen(3001, function(){
	console.log('Express server listening on http://localhost:3001/');
});
