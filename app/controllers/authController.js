const { User } = require('../models');
const bcrypt = require ('bcrypt');

const authController = {
    register(req, res) {
        res.json('Create an account to enjoy a personalised shopping experience and faster online checkout.');
    },

    async createUser (req, res){
        try {
            const registeredUser = await User.findOne({
                where: {email},
            });
            if(registeredUser){
                return res.json('A problem occured, please try again later');
            };
            const salt = await bcrypt.genSalt(10) // salt rounds => 10
            const password = req.body.password;
            const encryptedPassword = await bcrypt.hash(password, salt);
            await User.create({
                email,
                password: encryptedPassword,
                role: 'user',
            });
            res.json('Registration successful')
        } catch (error) {
            console.log(error.message);
            res.status(500).json(error.message);
        }

     }
};

module.exports = authController;