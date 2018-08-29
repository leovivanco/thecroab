module.exports = (gulp, plugins, paths) => () =>
  gulp.src(paths.actions.src)
    .pipe(plugins.stripComments())
    .pipe(plugins.babel())
    .pipe(gulp.dest(paths.actions.dest));
