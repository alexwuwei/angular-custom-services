'use strict';

const gulp = require('gulp');
const lint = require('gulp-eslint');
const webpack = require('webpack-stream');
const del = require('del');

let paths = ['*.js', 'public/js/*.js', 'public/index.html'];

const sources = {
  test: __dirname + '/test/*_spec.js'
};


gulp.task('eslint', () => {
  gulp.src(paths)
  .pipe(lint())
  .pipe(lint.format());
})

gulp.task('del-build', () => {
  return del([
    __dirname + '/public/build/**', __dirname + '!/public/build'
  ])
  .then(paths => console.log('Deleted files and folders:\n', paths.join('\n')));
});

  gulp.task('copy-html', () => {
  gulp.src(__dirname + '/public/index.html')
  .pipe(gulp.dest(__dirname + '/public/build'));
});

gulp.task('copy-css', () => {
  gulp.src(__dirname + '/public/css/*.css')
  .pipe(gulp.dest(__dirname + '/public/build'));
});

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/public/js/app.js')
  .pipe(webpack({
    watch: true,
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/public/build'));
});

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

gulp.task('watch', () => {
  gulp.watch(paths);
});

gulp.task('default', ['eslint', 'bundle:test', 'del-build', 'webpack', 'copy-html', 'copy-css']);
