var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
    ts: ['typings/**/*.ts', 'src/**/*.ts'],
    templates: ['src/**/*.html'],
    styles: ['src/**/*.css'],
    lib: [
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/angular2-polyfills.js'
    ]
};

gulp.task('ts', function () {
    return gulp.src(paths.ts)
        .pipe(ts({
            'module': 'commonjs',
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

gulp.task('lib', function() {
  return gulp.src(paths.lib)
    .pipe(gulp.dest('build/lib'));
});

gulp.task('rxjs', function() {
  return gulp.src('node_modules/rxjs/**')
    .pipe(gulp.dest('build/rxjs'));
});

gulp.task('default', ['ts', 'templates', 'styles', 'lib', 'rxjs'], function () {
    gulp.watch(paths.ts, ['ts']);
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.styles, ['styles']);
});