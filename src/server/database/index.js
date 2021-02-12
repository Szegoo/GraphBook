import Sequelyze from 'sequelize';
import configFile from '../config/index'
import models from '../models'

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

const sequelize = new Sequelyze(config.database, config.username, config.password, config);

const db = {
    models: models(sequelize),
    sequelize
};

export default db;