var gulp = require('gulp'),
		sass = require('gulp-sass'),
		pug = require('gulp-pug'),
		watch = require('gulp-watch'),
		csso = require('gulp-csso'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync');


gulp.task('sass', function () {
	function run() {
		return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
	}
	watch('app/sass/**/*.sass', run);
	return run();
});

gulp.task('pug', function() {
	function run() {
	return gulp.src('*.pug')
	.pipe(pug())
	.pipe(gulp.dest('app/'))
}
	watch('*.pug', run);
	return run();
});

gulp.task('css:bild', function () {
		return gulp.src('app/css/**/*.css')
		.pipe(concat('style.concat.css'))
		.pipe(csso())
		.pipe(gulp.dest('tmp'))
});

gulp.task('default', ['sass','pug']);


gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
});

//gulp.task('watch', ['browser-sync', 'sass'], function () {
	//gulp.watch('app/sass/**/*.sass', ['sass']);
	//gulp.watch('app/*.html', browserSync.reload);
	//gulp.watch('app/js/**/*.js', browserSync.reload);	

//}); 