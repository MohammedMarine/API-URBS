const isAdmin = (req, res, next) => {
    if(!req.session.user.role !== 'admin'){
        return res.redirect('/');
    }
    next()
};
module.exports = isAdmin