var gulp = require('gulp');
var uncss = require('gulp-uncss');
 
gulp.task('default', function () {
    return gulp.src('styles.css')
        .pipe(uncss({
            html: ['index.html', 'tapeline/index.html', 'wedding/index.html', '100ui/index.html']
        }))
        .pipe(gulp.dest('css/'));
});