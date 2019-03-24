var connection = require("./connection");

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

  
var orm = {
    viewAll: ((whatToSelect, table, cb) => {
        var queryStr = "SELECT ?? FROM ??";
        connection.query(queryStr, [whatToSelect, table], ((err, result) => {
            if (err) throw err;
            cb(result)
        }));
    }),
    create: ((table, cols, vals, cb) => {
        var queryStr = "INSERT INTO " + table;
    //insert into (table) value (??)
        queryStr += " (";
        queryStr += cols.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(vals.length);
        queryStr += ") ";
        connection.query(queryStr, vals, ((err, result) => {
            if(err) throw err;
            cb(result);
        }));
    }),
    //update 
    update: ((table, objColVals, condition, cb) => {
        var queryStr = "UPDATE " + table;
        queryStr += " SET ";
        queryStr += objToSql(objColVals);
        queryStr += " WHERE ";
        queryStr += condition;
        connection.query(queryStr, ((err, result) => {
            if(err) throw err;
            cb(result);
        }));
    }),
};

module.exports = orm;
