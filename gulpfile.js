const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject into browser
gulp.task('sass', function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', './src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move JS files to SRC/JS
gulp.task('js', function (){
	return gulp.src('node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js')
		.pipe(gulp.dest("src/js"))
		.pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./src"
	});
	gulp.watch(['sass']);
	gulp.watch("src/*.html").on('change', browserSync.reload);
});

//Move Font Awesome Css to src/css
gulp.task('fa', function(){
	return gulp.src('node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css')
		.pipe(gulp.dest("src/css"));
});

gulp.task('default', ['js', 'serve', 'fa']);


