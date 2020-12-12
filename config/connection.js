// Setting up MySQL connection.
var mysql = require("mysql");

// mysql://a7bis13k94bg17x1:kum642yi87jrh848@de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wnmxj3irr5q0stk9
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