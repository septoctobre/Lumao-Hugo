var gulp = require('gulp'),
    concat = require('gulp-concat')
    critical = require('critical')
    imagemin = require('gulp-imagemin');

gulp.task('css', function() {
    return gulp.src('./themes/lumao/static/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./themes/lumao/static/dist/'));
});

gulp.task('js', function() {
    return gulp.src(['./themes/lumao/static/js/first/*.js', './themes/lumao/static/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./themes/lumao/static/dist/'));
});

gulp.task('images', function () {
    return gulp.src('themes/lumao/static/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('themes/lumao/static/images/'));
});

gulp.task('critical', function () {
    critical.generate({
        inline: true,
        base: 'public/',
        src: 'index.html',
        dest: 'index.html',
        minify: true,
        width: 1300,
        height: 900
    });
});

gulp.task('default', ['css', 'js', 'images', 'critical']);