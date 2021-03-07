const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('scss-styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', () => {
    gulp.watch('scss-styles/**/*.scss', gulp.parallel('scss'))
})