const { User } = require("../models");

const userController = {
  getAllUser(req, res) {
    User.find({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getUserById(req, res) {
    User.findOne({ _id: params.id })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No user with this id" });
        }
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  createUser({ body }, res) {
    User.create(body)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  },
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No user found with this id" });
        }
        res.json(data);
      })
      .catch((err) => res.status(400).json(err));
  },
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No user found with this id" });
        }
        res.json(data);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
