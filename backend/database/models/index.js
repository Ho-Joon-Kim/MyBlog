import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, 'path/to/database.env') })

const env = process.env.NODE_ENV ||'development';
const config = require(path.join(__dirname,'..','config','config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.main = require('./main')(sequelize, Sequelize);
db.posts = require('./posts')(sequelize, Sequelize);

module.exports = db;