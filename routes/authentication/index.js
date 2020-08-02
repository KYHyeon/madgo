const router = require('express').Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const check = require('./check');
const authMiddleware = require('./middlewares/auth');

router.post('/register', register.register);

router.post('/login', login.login);
router.post('/logout', logout.logout);
router.use('/check', authMiddleware);
router.get('/check', check.check);

module.exports = router;