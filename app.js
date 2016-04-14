var express = require('express');
var app = express();
var md = require('marked'); //?
var fs = require('fs'); //for fs.readdir
var S = require('string'); //string.js
    // other = require("./otherfile");

app.set('view engine', 'jade');
app.set('views', __dirname + '/'); // specify the views directory

// Static resource lookup
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
	fs.readdir('./blogs', function(err, files){
		res.render('index', {posts: files, pageTitle: 'Home'});
	});
})
app.get('/404', function(req, res){
	res.render('404', {pageTitle: '404'});
});
app.get('/:post', function(req, res){
	var post = req.params.post;
	res.render('./blogs/' + post, { pageTitle: post, md: md});
})
app.get('*', function(req, res){
	res.render('404', {pageTitle: '404'});
});

// app.get('*', function(req, res){
//   res.send('what???');
// });


app.listen(3001, function(){
	console.log('Express server listening on http://localhost:3001/');
});
