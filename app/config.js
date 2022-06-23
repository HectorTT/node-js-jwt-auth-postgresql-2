const {config} = require('dotenv');
config();

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT
    }
}