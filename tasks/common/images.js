module.exports = (gulp, plugins, paths) => () =>
  gulp
    .src(paths.images.src)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(paths.images.dest));
