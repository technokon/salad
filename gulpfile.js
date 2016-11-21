/**
 * Created by iakoupov on 2016-11-21.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var htmlReplace = require('gulp-html-replace');
var uglify = require('gulp-uglify');


gulp.task('minify', function () {
    gulp.src([
        'app/js/app.js',
        'app/js/controllers.js',
        'app/js/services.js'
    ])
        .pipe(concat('salad.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('package', function () {
    gulp.src(['node_modules/angular/angular.min.js'])
        .pipe(gulp.dest('dist/js'))

    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('dist/css'))

    gulp.src(['app/index.html'])
        .pipe(htmlReplace({
            js: ['js/angular.min.js','js/salad.min.js'],
            css: 'css/bootstrap.min.css'
        }))
        .pipe(gulp.dest('dist'))
    
})
