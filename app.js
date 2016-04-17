var express = require('express');
var app = express();
var md = require('marked'); // read the README.md
var fs = require('fs'); // for fs.readdir
var S = require('string'); // string.js
var _ = require('lodash'); // lodash

var dir = './blogs/';
var files = fs.readdirSync(dir);

app.set('view engine', 'jade');
app.set('views', __dirname + '/'); // specify the views directory
app.set('port', (process.env.PORT || 3001));

// Static resource lookup
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
	res.render('index', {posts: files, pageTitle: 'Home', S: S});
});
app.get('/:post', function(req, res, err){
	var post = req.params.post;
	var postTitle = S(post).humanize().s;

	if (_.includes(files, post)){
		res.render('./blogs/' + post, { pageTitle: postTitle, md: md, S: S, postTitle: postTitle});
	}else {
		res.render('404', {pageTitle: '404'});
	}

});


app.listen(3001, function(){
	console.log('Express server listening on port:', app.get('port'));
	console.log('http://localhost:3001/');
});
