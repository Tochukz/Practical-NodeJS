const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const data = {
   "session": {
       "attributes": {
           "TransactionStatusCode": "InSeries"
       },
       "SessionId": "010Q4GRLZU",
       "SequenceNumber": "4",
       "SecurityToken": "3HLCTRDD9EIOT3TQOR8RC43D3X"
   },
   "reservation": {
       "totalAmount": 1210,
       "rooms": [
           {
               "checkOutDate": "2019-07-24T22:00:00.000Z",
               "price": "1210",
               "guests": [
                   {
                       "zip": "11111",
                       "country": "Down Under",
                       "firstname": "Testly",
                       "emailAddress": "test@test.A2BRACAcom",
                       "streetName": "1 test street",
                       "province": "Test",
                       "surname": "Test",
                       "contactNo": "+343334444"
                   }
               ],
               "numberOfRooms": "1",
               "bookingCode": "A2BRACA",
               "checkInDate": "2019-07-23T22:00:00.000Z",
               "roomType": "A2B"
           }
       ],
       "approved": false,
       "dateCreated": "2019-07-22T22:00:00.000Z",
       "hotel": {
           "name": "BEST WESTERN CAPE SUITES HOTEL",
           "city": "CPT",
           "code": "BWCPT023"
       },
       "id": "dcb7a73f-635d-49b6-912c-885e44a7b6a3",
       "bookingHolder": {
           "zip": "11111",
           "country": "Down Under",
           "firstname": "Testly",
           "emailAddress": "test@test.A2BRACAcom",
           "streetName": "1 test street",
           "province": "Test",
           "surname": "Test",
           "contactNo": "+343334444"
       },
       "status": "Unpaid"
   }
};
app.post('/hotels', (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // //res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  setTimeout(function(){}, 15000);

  // //const json = JSON.parse(req.body);
  // console.log(req.body);
  // console.log(req.body.toString());
  // res.json(data);


});

app.all('*', (req, res) => {
  setTimeout(function(){}, 15000);
  res.send('Welcome to practical Node.js');
});

const port = 3001;
app.listen(port, () => { console.log(`Open at localhost:${port}`)});

/**
 * Here we have used a local install of express as a module by doing:
 * $ npm install express@4.15.4 --save --exact
 * See "express-app" directory to get a feel of what an express app with scaffolding looks like.
 */
