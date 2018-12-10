var express = require('express');
var router = express.Router();
var mysqls = require('../mysqls/mysql');
/* GET users listing. */
router.get('/', function(req, res, next) {
    mysqls('select * from aidoubiao', [], function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});
router.get('/api/aidou', function(req, res, next) {
    mysqls('select * from suoyouaidou', [], function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});
module.exports = router;