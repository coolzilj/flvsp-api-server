var flvsp = require('flvsp-api');
var express = require('express');
var router = express.Router();

router.get('/info', function(req, res) {
  var pageURL = req.query.url;
  flvsp(pageURL, function(data) {
    res.send(data);
  });
});

module.exports = router;
