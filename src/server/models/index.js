import Sequelize from 'sequelize';
import module from './post.js';
import module2 from './user.js';

if (process.env.NODE_ENV === 'development') {
  require('babel-plugin-require-context-hook/register')()
}
export default (sequelize) => {
  let db = {};

  /* const context = require.context('.', true, /^\.\/(?!index\.js).*\.js$/, 'sync');
  context.keys().map(context).forEach(module => {
    const model = module(sequelize, Sequelize);
    db[model.name] = model;
  });  */
  const model = module(sequelize, Sequelize);
  const model2 = module2(sequelize, Sequelize);

  db[model.name] = model;
  db[model2.name] = model2;


  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};