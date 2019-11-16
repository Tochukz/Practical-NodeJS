const people = [
    {
        username: 'tochukz',
        password: 'makiki'
    },
    {
        username: 'makus',
        password: 'makiki'
    }
];

db.users.insertMany(people);

/**
 * To run, pass the database name and the script file as first and second argument to mongo cli client
 * $ mongo session-auth db/init.js
 * 
 * Here mongo in the cli client, session-auth is the database name. 
 */