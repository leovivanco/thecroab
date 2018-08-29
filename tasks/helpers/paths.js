const orderScript = (scripts, paths) => {
  let globalRegex = /\:global/;
  return scripts.map(script =>
    [].join.call([
      globalRegex.test(script)
        ? paths.global
        : paths.local,
      script.replace(globalRegex, ''),
      '.js'
    ], '')
  );
};

module.exports = function(paths, config) {
  return paths.map(path => {
    let defaults = config(path.name);
    defaults.scripts = Object.assign(
      {},
      defaults.scripts,
      {
        concatOrder: orderScript(
          path.scriptOrder,
          {
            global: defaults.scripts.global,
            local: defaults.scripts.path
          }
        )
      }
    );
    //console.log(defaults.scripts);
    return defaults;
  });
};
