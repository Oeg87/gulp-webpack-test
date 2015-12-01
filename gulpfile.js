var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');


var config = {
    js: {
        src: 'dev/js/',
        bundleName: 'bundle.js',
        dest: 'prod/js'
    }
}


gulp.task('js', function() {
    return gulp.src([config.js.src + 'main.js', config.js.src + 'test.js', config.js.src + 'app.js'])
        .pipe(named())
        .pipe(webpack({
            watch: true,
            module: {
                loaders: [{
                    test: /\.css$/,
                    loader: 'style!css'
                }],
            },
        }))
        .pipe(gulp.dest(config.js.dest));
});
