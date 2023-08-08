const emailValidator = require('email-validator');

function fieldValidator(req, res, next) {
    const {
        email,
        password,
        confirmation: passwordConfirmed,
    } = req.body;

    if (!email || !password || !passwordConfirmed) {
        return res.json('Please fill up all the required field')
    };

    if (password !== passwordConfirmed) {
        return res.json('The password can not be confirmed')
    };

    if (!emailValidator.validate(email)) {
        return res.json('Please provide a valid email address')
    };

    next()
};

module.exports = { fieldValidator }