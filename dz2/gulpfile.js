const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });
});

gulp.task('scriptsLint',function(){
    gulp.src('app/js/es6/**/*.js')
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('compileES5', function(){
    gulp.src('app/js/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app/js/es5/'))
});

gulp.task('watch',['browserSync','scriptsLint', 'compileES5'], function(){
    gulp.watch('app/js/es6/**/*.js', ['scriptsLint', 'compileES5']);
    gulp.watch(['app/*.html','app/js/es6/**/*.js'], browserSync.reload);
});