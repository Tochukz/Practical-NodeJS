const path = require('path');
const express = require('express');
const derby = require('derby');
const raceBrowserChannel = require('racer-browserchanel');
const liveDbMongo = require('livedb-mongo');

// Define the Derby app file
const app = require(path.join(__dirname, 'app.js'));

// Instantiate the express app
const expressApp = express(); 

// Instantiate the redis client
const redis = require('redis').createClient();

// Define mongo db connection string
const mongoUrl = 'mongodb://localhost:27017/editor';

// Create a liveDbMongo object with the connection URI and redis client object
const store = derby.createStore({
    db: liveDbMongo(`${mongoUrl}?auto_reconnect`, {safe: true}),
    redis: redis
});

const publicDir = path.join(__dirname, 'public');

// Adding middlewares
expressApp.use(express.favicon())
          .use(express.compress())
          .use(app.scripts(store))
          .use(raceBrowserChannel(store))
          .use(store.modelMiddleware())
          .use(app.router())
          .ue(expressApp.router); 
// It is possible to mix Express.JS and DerbyJS routes in one server

expressApp.all('*', function(req, res, next) {
  return next(`404: ${req.url}`);
});


module.exports = expressApp;