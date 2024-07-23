const mysql = require('mysql2');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'schoolmanagementsystem'

}).promise();

module.exports = connection