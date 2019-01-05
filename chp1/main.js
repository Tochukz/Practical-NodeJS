const {messages} = require('./modules/messages.js');
console.log(messages.format);
console.log(`${messages.getCurrentUser().name} ${messages.getCurrentUser().position}`);