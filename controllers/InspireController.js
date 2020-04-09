const db = require("../models");
const express = require("./node_modules/express");

module.exports = {
findAll: function(req, res) {
db.InspireD
.find(req.body)
.then(dbModel => res.json(dbModel))
.catch(err => res.status(422).json(err));
}
}