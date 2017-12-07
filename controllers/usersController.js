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
  },
  create: (req, res) => {
    User.create({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email})
      .then((result) => {
        res.redirect('/admin/users/index');
      })
      .catch((error) => {
        console.log('User was not be created');
      });
  },
  edit: (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        res.render('admin/users/edit', { user: user });
      })
  },
  destroy: (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        user.destroy().then(() => {
          res.send('done');
        });
      });
  }
}
