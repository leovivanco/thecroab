module.exports = (gulp, plugins, paths) => () =>
  gulp.src(paths.markup.src)
    .pipe(gulp.dest(paths.temp.src));
