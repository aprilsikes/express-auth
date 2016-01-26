var express = require('express');
var router = express.Router();

router.get('/signup', function (res, req, next) {
  res.render('signup/index', { title: 'My App'} );
});
