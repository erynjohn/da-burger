var mysql = require("mysql");
require('dotenv').config()
if(process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: "burgers_db"
    });
}

connection.connect((err) => {
    if(err) throw err;
    else {
        console.log("DB connected...");
    }
});

module.exports = connection;