const mysql = require('mysql2');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'R00t@root',
    database : 'talknow_db'
});

module.exports = db;