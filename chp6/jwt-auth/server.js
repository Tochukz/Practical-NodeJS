const SECRET = 'XY2018YII';
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const courses = [
    {title: "You don't know Node"},
    {title: "AWS Intro"}
];
const users = [];

const auth = (req, res, next) => {
    /* the name of the header does not matter as long as we use the same header for ther server and the client. We use the 'auth' header in htis example */
    if (req.headers && req.headers.auth && req.headers.auth.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.auth.split(' ')[1], SECRET, (error, decoded) => {
          if (error) return res.status(401).send();
          req.user = decoded;
          console.log('authenticated as ', decoded.username);
          next();
      });
    } else return res.status(401).send();
};

app.get('/', (req, res, next) => {
    res.send('Welcome to JWT Token Implemenetation');
});

/* unprotected route */
app.get('/courses', (req, res) => {
    res.send(courses);
});

/* protected route with the auth middleware: adds new course to the collection */
app.post('/courses', auth, (req, res) => {
    courses.push({title: req.body.title});
    res.send(courses);
});

app.post('/auth/register', (req, res) => { 
    // Encypt password using 10 rounds of hashing
    bcrypt.hash(req.body.password, 10, (error, hash) => { 
        if (error){
            console.log(error);
            return res.status(500).send({error: `${error}`});           
        }
        // Here you may save the user information in a database
        users.push({username: req.body.username, passwordHash: hash});
        
        res.status(201).send('Registeratiion was successfull');
        
    });
});

app.post('/auth/login', (req, res) => {
    // the find() in pratice could be a database call or a call to another API
    const foundUser = users.find((value, index, list) => {
        if(value.username === req.body.username) return true;
        else return false;
    });
    if (foundUser) {
        bcrypt.compare(req.body.password, foundUser.passwordHash, (error, matched) => {
            if (!error && matched) {
                //to sign a token means to encrypt the token
                res.status(201).json({token: jwt.sign({username: foundUser.username}, SECRET)});
            } else res.status(401).send();
        });
    } else res.status(401).send();
});

app.listen(3000);
