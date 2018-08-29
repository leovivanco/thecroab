module.exports = (gulp, plugins, paths) => () =>
  gulp.src(paths.scripts.concatOrder)
    .pipe(plugins.stripComments())
    .pipe(plugins.removeLogging())
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.babel())
    .pipe(plugins.uglifyjs())
    .pipe(gulp.dest(paths.temp.src));
