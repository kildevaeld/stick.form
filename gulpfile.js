'use strict';

const gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    babel = require('gulp-babel'),
    webpack = require('gulp-webpack'),
    merge = require('merge2');


const project = tsc.createProject('./tsconfig.json');
gulp.task('typescript', () => {
    let result = project.src()
    .pipe(tsc(project))
    
    let js = result.js
    .pipe(babel({
        presets: ['es2015']
    })).pipe(gulp.dest('lib'));
    
    let dts = result.dts.pipe(gulp.dest('lib'));
    
    return merge([js,dts]);
    
})    

gulp.task('default', ['typescript'], () => {
    
    return gulp.src('./lib/index.js')
    .pipe(webpack({
        output: {
            libraryTarget: 'umd',
            library: ['stick', 'form'],
            filename: 'stick.form.js'
        },
        externals: {
            "stick": 'stick'
        }
    }))
    .pipe(gulp.dest('dist'))
    
});

gulp.task('watch', () => {
    return gulp.watch('./src/**/*.ts', ['default']);
});