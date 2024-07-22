const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  const loggedUser = req.user;
  if (loggedUser){
    res.render('logged', {name: req.user.displayName, avatar: req.user.photos[0].value});
  } else {
    res.render('noPermission');
  }
});

router.get('/profile', (req, res) => {
  const loggedUser = req.user;
  if (loggedUser){
    res.render('userProfile');
  } else {
    res.render('noPermission');
  }
});

router.get('/profile/settings', (req, res) => {
  const loggedUser = req.user;
  if (loggedUser){
    res.render('profileSettings');
  } else {
    res.render('noPermission');
  }
});

module.exports = router;