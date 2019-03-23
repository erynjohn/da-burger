var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) throw err;
    else {
        console.log("DB connected...");
    }
});

module.exports = connection;