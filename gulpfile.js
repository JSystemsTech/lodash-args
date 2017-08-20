'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buildReadme = require('./gulpCustomPlugins/build-readme.js');
var buildUnitTests = require('./gulpCustomPlugins/build-unit-tests.js');
var buildDeployConfigs = require('./gulpCustomPlugins/buildDeployConfigs.js');
var SOURCE_FILE_NAME = 'lodash-args';
var SOURCE_FILE_NAME_ES5 = SOURCE_FILE_NAME + '-es5';
var SOURCE_FILE_PATH = './src/' + SOURCE_FILE_NAME + '.js'
var SOURCE_FILE_PATH_ES5 = './dist/' + SOURCE_FILE_NAME_ES5 + '.js'

gulp.task('build-package', function() {
    return gulp.src('./package.json')
        .pipe(buildDeployConfigs())
        .pipe(gulp.dest('./'));
});
gulp.task('reset-summary', function() {
    return gulp.src('./coverage-blank.json')
        .pipe(rename('coverage-summary.json'))
        .pipe(gulp.dest('./'));
});

gulp.task('build-bower', function() {
    return gulp.src('./bower.json')
        .pipe(buildDeployConfigs('bower'))
        .pipe(gulp.dest('./'));
});

gulp.task('build-readme', function() {
    return gulp.src('./readme.md')
        .pipe(buildReadme())
        .pipe(gulp.dest('./'));
});

gulp.task('generate-lodash-unit', function() {
    return gulp.src('./test/unit-test-templates/lodash-integration.js')
        .pipe(buildUnitTests('lodash'))
        .pipe(rename('lodash-integration-spec.js'))
        .pipe(gulp.dest('./src'));
});

gulp.task('generate-get-args-unit', function() {
    return gulp.src('./test/unit-test-templates/get-args.js')
        .pipe(buildUnitTests('get-args'))
        .pipe(rename('get-args-spec.js'))
        .pipe(gulp.dest('./src'));
});

gulp.task('generate-es5-unit', function() {
    return gulp.src('./test/unit-test-templates/es5.js')
        .pipe(buildUnitTests(null, './' + SOURCE_FILE_NAME_ES5, 'Testing ES5'))
        .pipe(rename(SOURCE_FILE_NAME_ES5 + '-spec.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('generate-es5-min-unit', function() {
    return gulp.src('./test/unit-test-templates/es5-min.js')
        .pipe(buildUnitTests(null, './' + SOURCE_FILE_NAME_ES5 + '.min', 'Testing ES5 minified'))
        .pipe(rename(SOURCE_FILE_NAME_ES5 + '.min-spec.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('generate-unit', ['generate-lodash-unit', 'generate-get-args-unit', 'generate-es5-unit', 'generate-es5-min-unit']);

gulp.task('transpile', function() {
    return gulp.src(SOURCE_FILE_PATH)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename(SOURCE_FILE_NAME_ES5 + '.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['transpile'], function() {
    return gulp.src(SOURCE_FILE_PATH_ES5)
        .pipe(rename(SOURCE_FILE_NAME_ES5 + '.min.js'))
        .pipe(uglify({
            compress: {
                dead_code: true
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('package', ['minify', 'build-readme', 'build-package', 'build-bower']);

gulp.task('default', ['transpile']);