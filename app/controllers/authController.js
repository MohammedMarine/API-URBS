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
      const email = req.user;
      const user = await User.findOne({ where: { email } });
      console.log(user);
      if (!email) {
        return res.status(401).json('You are not logged in');
      }
      if (!user) {
        return res.json('A problem occured, please try again later');
      }
      res.json({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
        streetnumber: user.streetnumber,
        zipcode: user.zipcode,
        city: user.city,
        country: user.country,
        phonenumber: user.phonenumber
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    }
  },
};

module.exports = authController;
