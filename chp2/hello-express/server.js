const express = require('express');
const app = express();
app.all('*', (req, res) => {
    res.send('Welcome to practical Node.js');
});

app.listen(3000, () => { console.log("Open at localhost:3000")});

/**
 * Here we have used a local install of express as a module by doing:
 * $ npm install express@4.15.4 --save --exact
 * See "express-app" to get a feel of what an express app with scaffolding looks like. 
 */
