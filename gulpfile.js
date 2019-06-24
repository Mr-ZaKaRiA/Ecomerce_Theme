// Call Gulp first of all
// and store it in a variable with the same name
var gulp = require('gulp');

// Call any plugine Gulp requires
var connect = require('gulp-connect');

//default tak that start everything automaticaly
// by just calling gulp command from terminal
gulp.task('default', ['build', 'connect', 'watch']);

//task connect that creates a server with auto reload the browser
gulp.task ('connect', function(){
    connect.server({
        root: 'build',
        livereload: true,
        port: 8080,
    })
});

// Create a task name throug gulp.task function
// and give it a function that return pipe

// Watch task: watch everything inside a folder like 'src/'
// If any changes do task 'build'
gulp.task('watch', function(){
    //console.log("Hello from Gulp!");
    return gulp.watch('src/**/*', ['build']);
});

//Create a task that copy all files from source 'src'
// and past it inside a destination 'build'
gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build')).pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js')).pipe(connect.reload());
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('build/fonts')).pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('src/images/*')
    .pipe(gulp.dest('build/images')).pipe(connect.reload());
});

// task 'build' does all 5 tasks at once
gulp.task('build', ['html', 'css', 'js', 'fonts', 'images']);

