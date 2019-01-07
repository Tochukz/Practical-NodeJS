### Commands  
#### Run node debugger  
After placing the `debug` statement on different lines on the sccript, run the command:  
`$ node inspect hello-debug.js`  
Use the following command while in the debugger interative shell:  
`cont`, `next`, `step`, `out`, `watch` or `c`, `n`, `s`, `o`.  
#### Install node inspector globally  
`$ npm install -g node-inspector@0.7.5`  
#### Running the node-inspector  
`$ node --inspect-brk hello-debug.js`  
#### Installing mongoDB driver  
`$ npm install mongodb --save`  
#### Installing Express.JS
This will intstall express locally to the project.  
`$ npm init -y`  
`$ npm install express@4.15.4 --save --exact`  
#### Creating an express app   
Here we use the express CLI to create an express app with it's skeleton/scaffolding  
* Install the Express.js Generator. This will give us the express CLI   
`$ sudo npm install -g express-generator@4.15.5`  
* Confirm that express has been installed correctly  
`$ express --version`  
* You can take a look at the CLI options  
`$ express --help`  
* Create an express project  
`$ express --css sass express-app`  
* Install dependencies:  
`$ cd express-app && npm install`  
* Run the app:  
`$ DEBUG=express-app:* npm start`  
* Open up your browser and enter `http://localhost:3000/` in the address bar.  
#### Creating epxress app manually  
Here we create an express app manually without using the express generator.  
* Create the package.json config file  
`$ npm init`  
* Install express  
`$ npm install express@4.15.4 --save`  
* Install pug  
`$ npm install pug@2.0.0-rc.4 --save`   
* Install stylus  
`$ npm install stylus@0.54.5 --save`  
* Assuming you have choosen app.js as your entry point you can start you server using any of the following commnd  
`$ node app.js`   
`$ node app`  
`$ node start`  
* If you choose index.js as your entry point, you can start you server using  
`$ node `  






