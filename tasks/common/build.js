module.exports = (gulp, plugins, paths) => () => {
  let options = {
    compress: false,
    pretty: true
  };

  gulp.src(paths.temp.markup)
    .pipe(plugins.rename({ basename: paths.markup.name }))
    .pipe(plugins.inlineSource(options))
    .pipe(plugins.replace(/<link[^<>]*>/g, ' '))
    .pipe(plugins.removeEmptyLines())
    .pipe(gulp.dest(paths.markup.dest));
};
