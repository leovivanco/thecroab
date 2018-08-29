const GLOBAL_PATHS = require('./tasks/config.json').PATHS;
const PATHS = require('./tasks/helpers/paths')(
	require('./variants.json'), require('./tasks/config.js')
);

// console.log(PATHS);

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const genTasks = (PATHS, gulp, plugins) =>
	(name, task) =>
		PATHS.forEach(path => {
			console.log(`${name}:${path.name}`);
			gulp.task(`${name}:${path.name}`, task(gulp, plugins, path));
		});

const generateTasks = genTasks(PATHS, gulp, plugins);

// Test Tasks
generateTasks('test:styles', require('./tasks/common/styles'));
generateTasks('test:scripts:dev', require('./tasks/dev/scripts'));
generateTasks('test:scripts:deploy', require('./tasks/deploy/scripts'));
generateTasks('test:styles:deploy', require('./tasks/deploy/styles'));
generateTasks('test:copyMarkup', require('./tasks/common/copyMarkup'));

gulp.task('test:images', require('./tasks/common/images')(gulp, plugins, GLOBAL_PATHS));

// Test Builds
PATHS.forEach(path => {
	gulp.task(`test:build:${path.name}`, [`test:styles:${path.name}`, `test:scripts:dev:${path.name}`, `test:copyMarkup:${path.name}`, 'test:images'], require('./tasks/common/build')(gulp, plugins, path));
});

PATHS.forEach(path => {
	gulp.task(`test:deploy:${path.name}`, [`test:styles:deploy:${path.name}`, `test:scripts:deploy:${path.name}`, `test:copyMarkup:${path.name}`, 'test:images'], require('./tasks/common/build')(gulp, plugins, path));
});


// Actions Tasks
gulp.task('actions:deploy', require('./tasks/deploy/scriptsActions')(gulp, plugins, GLOBAL_PATHS));

gulp.task('actions:build', require('./tasks/dev/scriptsActions')(gulp, plugins, GLOBAL_PATHS));

// Watch
gulp.task('watch', () => {
	PATHS.forEach(path => {
		gulp.watch(path.scripts.concatOrder, [`test:build:${path.name}`]);
		gulp.watch(path.styles.src, [`test:build:${path.name}`]);
		gulp.watch(path.styles.global, [`test:build:${path.name}`]);
	});
	gulp.watch(GLOBAL_PATHS.images.src, ['test:images']);
	gulp.watch(GLOBAL_PATHS.actions.src, ['actions:build']);
});

// Public Tasks
gulp.task('dev', ['watch']);
gulp.task('dev:actions', ['watch', 'actions:build']);
