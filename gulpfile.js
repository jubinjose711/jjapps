var gulp     = require('gulp'),
  $          = require('gulp-load-plugins')(),
  rimraf     = require('rimraf'),
  sequence   = require('run-sequence'),
  path       = require('path'),
  modRewrite = require('connect-modrewrite'),
  StreamQueue = require('streamqueue'),
  glob       = require('glob'),
  karma = require('gulp-karma'),
  karmareport = require('karma-htmlfile-reporter'),
  fileinclude = require('gulp-file-include'),
  argv = require('yargs').argv,
  fs         = require('fs'),
  htmlreplace = require('gulp-html-replace'),
  ghtmlSrc = require('gulp-html-src'),  
  file = require('gulp-file');
  header      = require('gulp-header');
  replace = require('gulp-replace-task'),
  minifyHTML = require('gulp-minify-html');;

  var paths = {
    styles: ['assets/scss'],
    images: ['assets/img']
  },
  bases = {
    src: 'src/app/',
    dist: 'dist/',
    assetsCssDist : 'dist/assets/css'
  };
// Cleans the build directory
gulp.task('clean', function(cb) {
  rimraf(bases.dist, cb);
});
// Compiles Sass
gulp.task('sass', function() {
  sequence(['sass:app'], function() {
    console.log("Sass processing Complete!");
  });
});

// Compiles App Sass
gulp.task('sass:app', function() {
  return gulp.src(paths.styles + '/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass()).on('error', function(e) {
      console.log(e);
    })
    .pipe($.autoprefixer({
      browsers: [
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 iOS versions',
        'Android > 2.1']
    }))
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write('./'))
    .pipe($.concat('jcp.min.css'))
    .pipe(gulp.dest(bases.assetsCssDist))
    .pipe($.notify({
      message: "Sass: App processing Complete!",
      onLast: true
    }));
});