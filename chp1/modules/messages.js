const path = require('path');
const {user} = require(path.join(__dirname, 'users', 'user'));
const messages = {
    users: [],
    addUser: function(user) {
        this.users.push(user);
    },
    format: 'title | date | author',
    getCurrentUser: function() {
        return this.users[this.users.length-1];
    }
};

messages.addUser(user);
exports.messages = messages;