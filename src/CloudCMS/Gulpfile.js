/// <binding Clean='clean' />

var gulp = require("gulp"),
    tsc = require('gulp-tsc'),
    shell = require('gulp-shell'),
    seq = require('run-sequence'),
    path = require('path'),
    del = require('del'),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var wwwRoot = "./" + project.webroot + "/";
var paths = {
    bower: "./bower_components/",
    lib: "./" + project.webroot + "/lib/",
    app: "./" + project.webroot + "/scripts/app/"
};

var baseBuildPath = path.join(wwwRoot, "scripts/ts/app/");
var baseDestPath = path.join(wwwRoot, "scripts/app/");
var buildPaths = {
    base: "",
    controllers: "controllers",
};

gulp.task('default', ['build']);

gulp.task("clean", function (cb) {
    del([
        paths.lib,
        paths.app
    ], cb);
});

gulp.task('rebuild', function (cb) {
    seq('clean', 'copy', 'build', cb);
});

gulp.task('build', function () {
    for (var buildPath in buildPaths) {
        console.log(baseBuildPath + buildPaths[buildPath] + "/*.ts");
        gulp.src(baseBuildPath + buildPaths[buildPath] + "/*.ts")
            .pipe(tsc({
                module: "CommonJS",
                sourcemap: false,
                emitError: false
            }))
            .pipe(gulp.dest(baseDestPath + buildPaths[buildPath]));
    }
});

gulp.task("copy", ["clean"], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "font-awesome": "font-awesome/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/dist/jquery*.{js,map}",
        "angular": "angular/angular*.{js,map}",
        "angular-route": "angular-route/angular-route*.{js,map}"
    }

    for (var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }
});