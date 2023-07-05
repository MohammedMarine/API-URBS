const { User } = require('../models');
const emailValidator = require ('email-validator');
const bcrypt = require ('bcrypt');

const authController = {
    register(req, res) {
        res.send('Create an account to enjoy a personalised shopping experience and faster online checkout.')
    }

    // async createUser (req, res){

    // }
};

module.exports = authController;