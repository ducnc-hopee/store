const User = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    User.findOne({
      username: username,
      password: password,
    })
      .then((user) => {
        if (user) {
          const { _id, username, email } = user;
          res.json({
            _id,
            username,
            email,
          });
        } else {
          res.status(401);
          res.send("username or password is incorrect");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
