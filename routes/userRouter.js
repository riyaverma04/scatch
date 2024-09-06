const express = require('express');
const router = express.Router();


router.get('/',function(req, res){
    res.send("user Router is working");
});

module.exports = router;