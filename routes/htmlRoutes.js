var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    {
      res.render("index", {
        msg: "Welcome!"
      });
    }
  });

  // Load bills page (display all bills)
  app.get("/bills", function(req, res) {
    db.Bills.findAll({}).then(function(dbBills) {
      res.render("bills", {
        bills: dbBills
      });
    });
  });

  // Load bills page and pass in a bill by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
