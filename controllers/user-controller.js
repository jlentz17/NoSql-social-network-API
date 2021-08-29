const { User, Thought } = require("../models");

const userController = {
  getAllUser(req, res) {
    User.find({})
    .populate({
      path: "thoughts",
      select: "-__v",
    })
    .select("-__v")
    .sort({ _id: -1 })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getUserById({ params }, res ) {
    User.findOne({ _id: params.id })
    .populate({
      path: "thoughts",
      select: "-__v",
    })
    .populate({
      path: "friends",
      select: "-__v",
    })
    .select("-__v")
      .then((data) => {
        console.log(data)
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
        // could do res.json(data) but we don't need the data. We just need to know that it was deleted.
        res.json(true);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
