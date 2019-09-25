const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss').pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError)).pipe(gulp.dest('src/css'))
})

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', gulp.series('sass'))
})