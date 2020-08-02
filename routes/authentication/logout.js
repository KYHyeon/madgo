const jwt = require('jsonwebtoken');
const User = require('../../model/user');

exports.logout = (req, res) => {
    res.redirect('/home');
}