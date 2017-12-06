let Sequelize = require('sequelize');
let dbConnect = require('../db/connection');

let User = require('../models/user')(dbConnect, Sequelize);

module.exports = {
  index: (req, res) => {
    User.findAll()
      .then((users) => {
        res.render('admin/users/index', { users: users });
      });
  },
  new: (req, res) => {
    res.render('admin/users/new');
  }
}
