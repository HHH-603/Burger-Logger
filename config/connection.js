// Setting up MySQL connection.
var mysql = require("mysql");

// git push heroku ma
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

connection.connect();

// Exporting connection for my ORM to use.
module.exports = connection;