const { User } = require ('../app/models');
const session = require ('express-session');

const afterOneHour = 60 * 60 * 1000;

const initSession = session({
    secret: process.env.SECRET, //session's user pw
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false, // False as not in https yet
        expires: afterOneHour // cookie expire after an 1 hour
    },

});


module.exports = { initSession };