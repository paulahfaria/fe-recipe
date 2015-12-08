# A delicious recipe for Front End developers
#### Built with ES6+, Browserify, Babel, Gulp, PostCss, Karma, Jasmine

A ready to use development workflow with the following capabilities:

- Dependency management: Browserify
- Code quality checking: Gulp (gulp-eslint)
- Code transpiling: babelify which is a Babel transformer for Browserify.
- CSS Post-processing: Gulp (gulp-postcss)
- Code minification: uglifyify which is a Uglify transformer for Browserify
- Assets optimization: Gulp (gulp-imagemin)
- Setup and launch a local webserver: Gulp (gulp-connect)
- Watch mode: watchify which is a Browserify plugin that provides watch mode for Browserify builds.
- Run unit tests: karma-browserify, browserify integration for Karma 


## Getting Started

* Clone the repository:
```bash
git clone https://github.com/dfernandeza/fe-recipe
cd fe-recipe
```

* Install all the dependencies:
```bash
npm install
```

* Start the project:
```bash
npm start
```
_Or start the project with development mode on (with source maps enabled)_
```bash
npm run dev
```

* Start hacking


#### Testing 
Running `npm test` will run the unit tests with Karma.

## TODO:

- Add Istanbul?
- How to deal with the DOM in the JS test (either phantom or jsdom)

## License
MIT
