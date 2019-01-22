const mongo = require('mongodb');
const dbHost = '127.0.0.1';
const dbPort = '27017';
const {Db, Server} = mongo;
const db =  new Db('test', new Server(dbHost, dbPort), {safe: true});

db.open((error, dbConnetion) => {
    if(error){
        console.error(error);
        process.exit(1);
    }
    console.log('db state: ', db._state);
    dbConnetion.collection('messages').findOne({}, (error, item) => {
        if(error){
            console.error(error);
            process.exit(1);
        }
        console.info('findOne: ', item);
        item.text = 'hi';
        var id = item._id.toString();
        console.info('before saving: ', item);
        dbConnetion.collection('messages')
                   .save(item, (error, document) => {
                       if(error){
                           console.error(error);
                           return process.exit(1);
                       }
                       console.info('save: ', document);
                       /**To convert a string into the ObjectId type, use mongo.ObjectID() method.*/
                       dbConnetion.collection('messages')
                                   .find({_id: new mongo.ObjectID(id)})
                                   .toArray((error, documents) => {
                                       if(error){
                                           console.error(error);
                                           return process.exit(1);
                                       }
                                       console.info('find: ', documents);
                                       db.close();
                                       process.exit(0);
                                   });
                   });
    });
});