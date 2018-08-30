var db = require("../models");

module.exports = function(app) {
  // Get all bills
  app.get("/api/bills", function(req, res) {
    db.Bills.findAll({}).then(function(dbBills) {
      res.json(dbBills);
    });
  });

  // Create a new bill
  app.post("/api/examples", function(req, res) {
    db.Bills.create(req.body).then(function(dbBills) {
      res.json(dbBills);
    });
  });

  // Delete a bill by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Bills.destroy({ where: { id: req.params.id } }).then(function(dbBills) {
      res.json(dbBills);
    });
  });
};
