var gulp = require('gulp'),  
pug = require('gulp-pug');
const formatHtml = require('gulp-format-html')

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {  
  return gulp.src('src/*.pug')
      .pipe(pug())
      .pipe(formatHtml())
      .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
  gulp.watch(['src/**'], gulp.series('pug'));
});