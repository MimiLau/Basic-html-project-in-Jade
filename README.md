# Features
- Compile jade in to html

# Usage
To start server:
```
npm start
```
and go to [http://localhost:3001](http://localhost:3001)

To start blogging:
```
grunt prompt
```
will ask you the blog post, please don't left any space,
then the `README,md` will pop out by atom, save it and you will see the blog appear in homepage.

To auto compile `.scss` and `.js` from `src` to `assets` folder:
```
grunt watch
```

To convert jade into html:
```
grunt jade
```

# Bugs are waiting for fixed
- `postcss` cannot use
	disable now
- `stylelint` is annoying
	disable stylint atom plugin now
- read markdown `include:md` is red dot in atom editor
```
In order to apply the transform markdown you must install one of "marked","supermarked","markdown-js","markdown"
```
- `.sass-cache` folder is created
```
Sass cache files speed up compilation based on whether a Sass file has changed since last compile.
```


# Changelog
