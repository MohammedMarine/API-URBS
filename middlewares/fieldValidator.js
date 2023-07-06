const emailValidator = require('email-validator');

function fieldValidator (req, res, next) {
    const {
        email,
        password,
        firstname,
        lastname,
        confirmation: passwordConfirmed,
        address,
        streetnumber,
        zipcode,
    } = req.body;

    if(
        !email,
        !password,
        !passwordConfirmed
    ) {
        return res.send('Please fill up all the required field')
    };

    if(password !== passwordConfirmed){
        return res.send('The password can not be confirmed')
    };

    if(!emailValidator.validate(email)){
        return res.send('Please provide a valid email address')
    }
};

module.exports = {fieldValidator}