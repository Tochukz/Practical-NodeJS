const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

router.get('/', (req, res) => {
    res.redirect('/login');
})

router.get('/login',  (req, res) => {
  const warning = req.query.warning;
  res.render('login', {warning});
});

router.post('/login', auth.authenticate, (req, res) => {
  res.redirect('/dashboard')
});

router.get('/dashboard', auth.authorize, (req, res) => {
  const username = req.session.username;
  res.render('dashboard', { username });
});

module.exports = router;