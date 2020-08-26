const router = require('express').Router();
const roomSearch = require('./roomSearch');
const roomMatching = require('./roomMatching');

router.get('/search', roomSearch.search);
router.get('/matching', roomMatching.matching);
module.exports = router;