var express = require("express");

var PORT = process.env.PORT || 4000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.put("/api/burgers/:id", function(req, res) {
  createConnection.query(
    "UPDATE burgers SET burger_name = ?, id = ?",
    [req.body.burger_name, req.params.id],
    function(err, result) {
      if (err) {
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  )
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});