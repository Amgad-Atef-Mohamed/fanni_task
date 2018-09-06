// Include gulp
const gulp = require('gulp');
const print = require('gulp-print').default;

// Include plugins
const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});
const mainBowerFiles = require('main-bower-files');
const gulpFilter = require('gulp-filter');

// Define default destination folder
const dest = 'public';
gulp.task('js', function () {

  return gulp.src(mainBowerFiles().concat(['public/javascripts/*.js']))
    .pipe(gulpFilter('**/*.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dest + '/javascripts'));

});

gulp.task('css', function () {
  return gulp.src(mainBowerFiles().concat(['public/stylesheets/*.css']))
    .pipe(plugins.filter('**/*.css'))
    .pipe(plugins.cleanCss({ compatibility: 'ie8' }))
    .pipe(plugins.order([
      '**/style.css',
      '*'
    ]))
    .pipe(gulp.dest(dest + '/stylesheets'));
});

gulp.task('inject', function () {
  const target = gulp.src('./views/index.ejs');
  const cssFilesSources = plugins.inject(gulp.src('public/**/*.css',{ read: false }), { ignorePath: 'public'});
  const jsFiles = gulp.src('public/**/*.js', { read: false });

  const orderJsFiles = jsFiles.pipe(plugins.order([
    '**/jquery.js',
    '*'
  ]));
  const jsFilesSources = plugins.inject(orderJsFiles, { ignorePath: 'public' });

  return target.pipe(cssFilesSources)
    .pipe(jsFilesSources)
    .pipe(gulp.dest('views'));
});


gulp.task('build-inject', gulp.series('css', 'js', 'inject'));