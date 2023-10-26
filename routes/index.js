const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const { auth } = require('express-openid-connect');
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8080',
  clientID: 'DJQjZ4IvFRMY9gEh6ETD003p1DgXN3d9',
  issuerBaseURL: 'https://dev-2of2wzj2x83rpvs7.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));
router.use('/', require('./swagger'));
router.use('/location', require('./location'));
router.use('/inventory',requiresAuth(), require('./inventory'));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = router;