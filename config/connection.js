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

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    connection.end();
});
app.get("/", function (req, res) {
    res.send("Connected!");
});
app.listen(PORT, function () {
    console.log('Server running on http://localhost:' + PORT);
})

// Exporting connection for my ORM to use.
module.exports = connection;