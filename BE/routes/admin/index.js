const router = require('express').Router();
const assignAdmin = require('./assignAdmin');
const userList = require('./userList');

router.get('/list', userList.list);
router.get('/assign-admin/:username', assignAdmin.assignAdmin);

module.exports = router;