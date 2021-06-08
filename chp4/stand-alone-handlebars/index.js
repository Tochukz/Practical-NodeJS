const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
   Handlebars can be compiled on the client at runtime
   It can also be compiled on the sevrer at compile time.

   Here the three methods are demostrated
   See public/client-compiled for client side compilation method
   See public/server-compiled for server-side compile time compilation method
   See run-build-template for compilation on server-side using node-module.

   To complile on the severside, run the bash file server-compile.sh
   The template used for the server-side alone is found in templates directory


*/
