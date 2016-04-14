# Features
- Compile jade in to html
- `grunt prompt` to blog

# Usage

## To Start server
```
npm start
```
and go to [http://localhost:3001](http://localhost:3001)

To auto compile `.scss` and `.js` from `src` to `assets` folder:
```
grunt watch
```

## To start blogging
```
grunt blog
```
will ask you the blog post, please don't left any space, i.e. `first-post`
then the `README,md` will pop out by atom, save it and you will see the blog appear in homepage.

To convert jade into html:
```
grunt jade
```

# Bugs are waiting for fixed
- [ ] `postcss` cannot use
	disable now
- [ ] `stylelint` is annoying
	disable stylint atom plugin now
- [ ] read markdown `include:md` is red dot in atom editor
```
In order to apply the transform markdown you must install one of "marked","supermarked","markdown-js","markdown"
```
- [ ] `.sass-cache` folder is created
```
Sass cache files speed up compilation based on whether a Sass file has changed since last compile.
```
- [ ] `grunt jade` has error
- [ ] 404 page redirect
- [ ] publish to _username_.github.io

# Changelog
- gitignore the .html
