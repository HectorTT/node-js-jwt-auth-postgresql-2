require('dotenv').config(); 
module.exports = {
"development": {
    "username": "postgres",
    "password": "toor",
    "database": "dbtest",
    "host": "localhost",
    "dialect": "postgres"
},
"test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
},
"production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
};