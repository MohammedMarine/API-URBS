require("dotenv/config");
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const authController = {
  login(req, res) {
    res.json('Sign in with your email and password.');
  },

  async signin(req, res) {
    const { email, password } = req.body;
    try {
      const registeredUser = await User.findOne({ where: { email } });
      if (!registeredUser) {
        return res.json('A problem occured, please try again later');
      }
      const passwordOk = await bcrypt.compare(password, registeredUser.password);
      if (!passwordOk) {
        return res.json('A problem occured, please try again later');
      } else {
        const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
        res.json({
          logged: true,
          pseudo: registeredUser.firstname,
          accessToken: accessToken
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    }
  },

  async showAccount(req, res) {
    try {
      const email = req.user.email;
      const user = await User.findOne({ where: { email } });
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    }
  },

//   destroy(req, res) {
//     const user = req.user;
//     console.log(user);
//     if (user){
//       req.user.destroy();
//       res.json('See you next time');
//     } else {
//       res.status(401).json('You are not logged in');
//     }}
};

module.exports = authController;
