module.exports = function (folder) {
  return {
    'name': folder,
    'scripts': {
      'path': './src/elementos/' + folder + '/js/',
      'global': './src/elementos/_global/js/',
      'src': './src/elementos/' + folder + '/js/*.js',
      'concatOrder': [],
      'concatName': 'main.js'
    },
    'styles': {
      'path': './src/elementos/' + folder + '/css/',
      'globalPath': './src/elementos/_global/css/',
      'global': './src/elementos/_global/css/*.scss',
      'src': './src/elementos/' + folder + '/css/*.scss'
    },
    'markup': {
      'path': './src/elementos/',
      'src': './src/elementos/*.html',
      'dest': './dist/elementos',
      'name': folder
    },
    'temp': {
      'src': './.tmp/' + folder + '/',
      'markup': './.tmp/' + folder + '/*.html'
    }
  };
};

// Fazer com que tenha 2 arquivos para incluir uma IIFE antes e após os scripts
// https://coryrylan.com/blog/multiple-sources-in-gulpjs
// Inserir sass
