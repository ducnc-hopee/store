const User = require("../model/user");

module.exports.getAllUser = (req, res) => {
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;

  User.find()
    .limit(limit)
    .sort({ createdAt: sort })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

module.exports.getUser = (req, res) => {
  const id = req.params.id;

  User.findOne({
    _id: id,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

module.exports.addUser = async (req, res) => {
  if (typeof req.body == undefined) {
    res.json({
      status: "error",
      message: "data is undefined",
    });
  } else {
    try {
      if (!req.body.email || !req.body.username || !req.body.password) {
        return res.status(400).json({
          message: "Bad request",
        });
      }
      const exist = await User.findOne({ email: req.body.email });
      if (exist) {
        return res.status(400).json({
          message: "email is already registered",
        });
      }
      const user = await User.create(req.body);

      return res.status(201).json({
        status: "success",
        data: user,
      });
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
  }
};

module.exports.editUser = (req, res) => {
  if (typeof req.body == undefined || req.params.id == null) {
    res.json({
      status: "error",
      message: "something went wrong! check your sent data",
    });
  } else {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body, updatedAt: Date.now() }
    )
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  }
};

module.exports.deleteUser = (req, res) => {
  if (req.params.id == null) {
    res.json({
      status: "error",
      message: "cart id should be provided",
    });
  } else {
    User.findOneAndDelete({
      _id: req.params.id,
    })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  }
};
