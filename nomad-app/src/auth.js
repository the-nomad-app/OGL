import React from "react";
import App from "App.js"

const { auth } = require('express-openid-connect');

const config = {
  authRequired: true,
  auth0Logout: true,
  secret: 'r5Z7P_FjTEag4_zzK9ukDMZQIPbHci99FiBASAIuYLJo9XZFZOfn9S9P3tDwZA9H',
  baseURL: 'https://the-nomad-app.herokuapp.com/',
  clientID: 'H0ExoJagF5wWtRrkWorEsLIR5IqXWQmY',
  issuerBaseURL: 'https://empty-dawn-8607.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

export default auth