var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
    ts: ['typings/**/*.ts', 'src/**/*.ts'],
    templates: ['src/**/*.html'],
    styles: ['src/**/*.css']
};

gulp.task('ts', function () {
    return gulp.src(paths.ts)
        .pipe(ts({
            'module': 'umd',
            'experimentalDecorators': true,
            'emitDecoratorMetadata': true,
            'target': 'ES5'
        })).js
        .pipe(gulp.dest('build'));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(gulp.dest('build'));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['ts', 'templates', 'styles'], function () {
    gulp.watch(paths.ts, ['ts']);
    gulp.watch(paths.templates, ['templates']);
});