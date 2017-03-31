var gulp = require('gulp');
var b = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var hbsfy = require('hbsfy');
var sassify = require('sassify');
var babelify = require('babelify');

gulp.task('template', function () {
  var bundler = b('./', {
    dubug: true,
  })
          .transform(hbsfy)
          .transform(sassify, {
            'auto-inject': true,
            base64Encode: true,
            sourceMap: false
          })
          .transform(babelify);
  bundler
          .bundle()
          .pipe(source('bundle.js'))
          .pipe(buffer())
          .pipe(gulp.dest('./'));

});