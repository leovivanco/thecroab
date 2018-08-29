module.exports = (gulp, plugins, paths) => () =>
  gulp.src(paths.scripts.concatOrder)
    .pipe(plugins.stripComments())
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.babel())
    .pipe(gulp.dest(paths.temp.src));
