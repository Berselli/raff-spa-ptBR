const gulp = require('gulp')
const sass = require('gulp-sass')
const watch = require('gulp-watch')

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss').pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError)).pipe(gulp.dest('src/css'))
})

gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js']).pipe(gulp.dest('src/js'))
})

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', gulp.series('sass'))
})