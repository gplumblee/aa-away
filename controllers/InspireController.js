const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.InspireD.find(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
