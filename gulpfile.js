const gulp = require("gulp");
const glob = require('glob');
const browserify = require('browserify');
const path = require('path');
const babelify = require('babelify');
const streamTransform = require('vinyl-source-stream');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('src/typeScript'));

    return glob('src/*.js',(err,files) => {
            files.map(function(file){
                browserify(file)
                    .transform(
                        babelify.configure({
                            presets : ['@babel/preset-env']
                        })
                    )
                    .bundle()
                    .pipe(streamTransform(path.basename(file)))
                    .pipe(gulp.dest('./dist'));
            })
        })
    // return Promise.resolve();
});