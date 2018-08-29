module.exports = (gulp, plugins, paths) => () =>
	gulp.src(paths.actions.src)
		.pipe(plugins.stripComments())
		.pipe(plugins.removeLogging())
		.pipe(plugins.babel())
		.pipe(plugins.minify())
		.pipe(gulp.dest(paths.actions.dest))

