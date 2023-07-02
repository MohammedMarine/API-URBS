const { User } = require ('../app/models');
const session = require ('express-session');

const inOneHour = 60 * 60 * 1000;

const initSession = session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, expires: inOneHour }, // cookies expire in 1 hour
});


module.exports = { initSession };