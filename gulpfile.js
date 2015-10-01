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
  // These files are for your app's JavaScript
var appJS = [
  bases.src + 'app.js',
  bases.src + '**/*.js',
  '!' + bases.src + '**/*-spec.js',
  '!' + bases.src + 'lib/**/*.js',
  '!./src/app/test/**/*.js',
  '!./src/app/components/apiclient/*.js'
];
  // These files are for your app's JavaScript
var libJS = [
  bases.src + 'lib/*.js'
];

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

// Copy static files to the dist directory
gulp.task('copy', function() {
  sequence(['copy:assets', 'copy:html'], function() {
    console.log("Copy Complete!");
  });
});

// Copy assets to the dist directory
gulp.task('copy:assets', function () {
  return gulp.src(['assets/img/**/*'])
    .pipe(gulp.dest(bases.dist + 'assets/img'));

});

// Move HTML files to dist directory
gulp.task('copy:html', function() {
  return gulp.src(bases.src + '**/*.html')
   
    .pipe(gulp.dest(bases.dist))
    .pipe($.notify({
      message: "Copy: HTML Complete!",
      onLast: true
    }));
});

// Compile JavaScript
gulp.task('scripts', function(cb) {
  sequence(['scripts:app'], function() {
    console.log("Finished");
  });
});

// Minify and move app.js file to dist folder
gulp.task('scripts:app',function(callback) {
  return gulp.src(appJS)
 //   .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.uglify())
    .pipe($.concat('jjapps.min.js'))
   // .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(bases.dist+ 'scripts/'))
    .pipe($.notify({
      message: "Application script processed!",
      onLast: true
    }));
});

gulp.task('libjs', function() {
  return gulp.src(libJS)
  .pipe(gulp.dest(bases.dist+ 'lib/'))
    .pipe($.notify({
      message: "Copy: Libraray Complete!",
      onLast: true
    }));
});

// Builds your entire app once, without starting a server
gulp.task('build', function() {
  sequence('clean', ['copy', 'sass', 'scripts',
                     'libjs'], function() {
    console.log("Successfully Built!");
  });
});
gulp.task('default', ['build']);