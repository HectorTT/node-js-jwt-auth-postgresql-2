const {db} = require('../config');
module.exports = {
    HOST: db.host,
    USER: db.user,
    PASSWORD: db.password,
    DB: db.database,
    dialect: db.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };