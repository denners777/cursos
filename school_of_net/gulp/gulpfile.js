'use strict';

var gulp = require('gulp'),
        sass = require('gulp-sass'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        imagemin = require('gulp-imagemin'),
        pngquant = require('imagemin-pngquant'),
        imageminGifsicle = require('imagemin-gifsicle'),
        imageminJpegtran = require('imagemin-jpegtran'),
        imageminOptipng = require('imagemin-optipng'),
        imageminSvgo = require('imagemin-svgo');

gulp.task('default', ['sass', 'js', 'image']);

gulp.task('sass', function () {
  return gulp.src('assets/src/sass/**/*.scss')
          .pipe(concat('style.min.css'))
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function () {
  return gulp.src('assets/src/js/**/*.js')
          .pipe(concat('script.min.js'))
          .pipe(uglify())
          .pipe(gulp.dest('assets/js'));
});

gulp.task('image', function () {
  return gulp.src('assets/src/img/*')
          .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [
              pngquant(),
              imageminGifsicle(),
              imageminJpegtran(),
              imageminOptipng(),
              imageminSvgo({
                plugins: [
                  {removeViewBox: false}
                ]
              }),
            ]
          }))
          .pipe(gulp.dest('assets/img'));
});
