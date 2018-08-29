module.exports = (gulp, plugins, paths) => () =>
  gulp
    .src(paths.styles.src)
    .pipe(plugins.sass({ includePaths: paths.styles.globalPath }).on('error', plugins.sass.logError))
    .pipe(plugins.stripCssComments())
    .pipe(plugins.csscomb())
    .pipe(plugins.removeEmptyLines())
    .pipe(gulp.dest(paths.temp.src));
