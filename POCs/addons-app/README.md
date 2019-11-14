# Nodejs Addon
Node.js Addons are dynamically-linked shared objects, written in C++, that can be loaded into Node.js using the require() function, and used just as if they were an ordinary Node.js module. They are used primarily to provide an interface between JavaScript running in Node.js and C/C++ libraries.  

## Advantages
* Performance
* Lower-level APIs
* C++ libraries

## Creating Addon Prerequisites
* v8
* Libuv
* Interal Node.js libraries

## Setup
* Install Xcode
* .cc file
* node-gyp node module (`$ npm install -g node-gyp`)
* binding.gyp file to compilation instruction
```
{
    "targets": [
        {
            "target_name": "addon",
            "source": ["addon.cc"]
        }
    ]
}
```
* Run `$ node-gyp configure build`
* require addon like this `const addon = require('./build/Release/addon');`
