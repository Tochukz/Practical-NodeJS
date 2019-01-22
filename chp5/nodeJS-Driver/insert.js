const mongo = require('mongodb');
const dbHost = '127.0.0.1';
const dbPort = 27017;
const {Db, Server} = mongo;
/**person is the name of the database */
const db = new Db('person', new Server(dbHost, dbPort), {safe: true}); 

db.open((error, dbConnection) => {
    if (error) {
        console.error(error);
        return process.exit(1);
    }
    console.log('db_state: ', db._state);
    const item = {
        name: 'Ade',
        city: 'Johannesburg'
    }
    dbConnection.collection('messages')
                .insert(item, (error, document) => {
                  if (error) {
                      console.error(error);
                      return process.exit();
                  }
                  console.info('created/inserted:', document);
                  db.close();
                  process.exit(0);
                });
});